import React, { useState } from "react";
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon, 
  IconButton,
  useMediaQuery,
  useTheme,
  Box,
  Divider
} from "@mui/material";
import { Home, Settings, Person, Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 250;

const Sidebar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const location = useLocation(); // To track the current route and set active link

    const menuItems = [
        { text: "Home", path: "/", icon: <Home /> },
        { text: "Profile", path: "/profile", icon: <Person /> },
        { text: "Settings", path: "/settings", icon: <Settings /> }
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{ height: '100%', overflow: 'auto' }}>
            {/* Logo and Menu Section */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 16px',
                    justifyContent: 'space-between',
                    borderBottom: '2px solid rgba(0, 0, 0, 0.12)'
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img 
                        src="https://th.bing.com/th/id/OIP.TEYP4J-XZwm-XnT7Pnq7LAHaHa?w=1920&h=1920&rs=1&pid=ImgDetMain" 
                        alt="Logo"
                        style={{ height: '30px', width: '150px', objectFit: 'contain' }} // Updated logo size
                    />
                </Box>
                {/* Menu Icon Button visible on mobile view */}
                <IconButton 
                    onClick={handleDrawerToggle}
                    sx={{ 
                        color: 'grey.700',
                        display: { xs: 'block', sm: 'none' }, // Only visible on small screens
                    }}
                >
                    {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
            </Box>

            {/* Menu Items */}
            <List sx={{ mt: 2, px: 2 }}>
                {menuItems.map((item) => (
                    <ListItem
                        button
                        component={Link}
                        to={item.path}
                        key={item.text}
                        sx={{
                            borderRadius: '8px',
                            mb: 0.5,
                            py: 0.75, // Reduced height of list items
                            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                                color: 'grey.700',
                            },
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                                '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                                    color: 'grey.900',
                                }
                            },
                            '&.active': {
                                backgroundColor: 'rgba(0, 0, 0, 0.12)', // Grey background for active item
                                '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                                    color: 'black', // Black text for active item
                                }
                            },
                            ...(location.pathname === item.path && {
                                backgroundColor: 'rgba(0, 0, 0, 0.12)', // Active state background
                                '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                                    color: 'black', // Active state text color
                                }
                            })
                        }}
                    >
                        <ListItemIcon sx={{ minWidth: '40px' }}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText 
                            primary={item.text}
                            sx={{ 
                                '& .MuiTypography-root': { 
                                    fontWeight: 500,
                                    fontSize: '0.875rem' // Slightly smaller text
                                }
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' }, // Only visible on small screens
                    '& .MuiDrawer-paper': { 
                        width: drawerWidth,
                        bgcolor: 'background.paper',
                        boxShadow: 3,
                        borderRight: '2px solid rgba(0, 0, 0, 0.12)'
                    },
                }}
            >
                {drawer}
            </Drawer>

            {/* Desktop Drawer */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': { 
                        width: drawerWidth,
                        bgcolor: 'background.paper',
                        boxShadow: 3,
                        borderRight: '2px solid rgba(0, 0, 0, 0.12)'
                    },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

export default Sidebar;
