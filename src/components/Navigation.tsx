import { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import DownloadIcon from '@mui/icons-material/Download';
import '../assets/styles/Navigation.scss';

export { };

declare global {
  interface Window {
    plausible: (eventName: string, options?: { props?: Record<string, string> }) => void;
  }
}

const drawerWidth = 240;
const navItems = [['About', 'about'], ['Skills', 'expertise'], ['Experience', 'history'], ['Contact', 'contact'], ['Resume', 'resume']]; //['Projects', 'projects'],

function Navigation({ parentToChild, modeChange }: any) {

  const { mode } = parentToChild;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight;
        setScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    console.log(section)
    if (section === 'resume') {
      handleResumeDownload();
      return;
    }
    const expertiseElement = document.getElementById(section);
    if (expertiseElement) {
      expertiseElement.scrollIntoView({ behavior: 'smooth' });
      console.log('Scrolling to:', expertiseElement);  // Debugging: Ensure the element is found
    } else {
      console.error('Element with id "expertise" not found');  // Debugging: Log error if element is not found
    }
  };

  const handleResumeDownload = () => {
    // Track device type
    const isMobile = window.innerWidth < 768;
    const deviceType = isMobile ? 'mobile' : 'desktop';
    // Send event to Plausible (if loaded)
    if (window.plausible) {
      window.plausible('Resume Download', {
        props: { device: deviceType }
      });
    }
    // Trigger download
    const pdfUrl = '/Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <p className="mobile-menu-top"><ListIcon />Menu</p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            {item[1] === 'resume' ? (
              <ListItemButton
                className="resume-link"
                onClick={(e) => {
                  e.stopPropagation();
                  handleResumeDownload();
                }}
              >
                <span className="resume-link-content">
                  <span className="resume-link-text">{item[0]}</span>
                  <DownloadIcon className="resume-download-icon-mobile" />
                </span>
              </ListItemButton>
            ) : (
              <ListItemButton className="nav-link" onClick={() => scrollToSection(item[1])}>
                <ListItemText primary={item[0]} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}>
        <Toolbar className='navigation-bar'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {mode === 'dark' ? (
            <LightModeIcon onClick={() => modeChange()} />
          ) : (
            <DarkModeIcon onClick={() => modeChange()} />
          )}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) =>
              item[1] === 'resume' ? (
                <Box
                  key={item[0]}
                  component="span"
                  className="resume-box"
                >
                  <Button
                    className="resume-link"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleResumeDownload();
                    }}
                  >
                    <span className="resume-link-content">
                      <span className="resume-link-text">{item[0]}</span>
                      <DownloadIcon className="resume-download-icon-desktop" />
                    </span>
                  </Button>
                </Box>
              ) : (
                <Button
                  key={item[0]}
                  onClick={() => scrollToSection(item[1])}
                  className={`nav-link ${mode === 'dark' ? 'nav-link-dark' : 'nav-link-light'}`}
                >
                  {item[0]}
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;