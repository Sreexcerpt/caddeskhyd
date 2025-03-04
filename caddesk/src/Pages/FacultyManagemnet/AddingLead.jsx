import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaGlobe, FaPhone, FaPlus, FaTimes, FaUser, FaCalendarAlt, FaCheck } from "react-icons/fa";
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
  Paper, Button, TextField, Select, MenuItem, Box, IconButton,
  Grid2, Typography, useMediaQuery, useTheme, Avatar, Chip, Fade, Zoom, Grow,
  Card, CardContent, LinearProgress, Badge, Drawer, Divider
} from "@mui/material";

// Custom color palette
const colors = {
  primary: "#5046e5",
  secondary: "#f50057",
  success: "#00c853",
  warning: "#ffc107",
  info: "#2196f3",
  dark: "#0a1929",
  light: "#f9fafc",
  white: "#ffffff",
  facebook: "#1877F2",
  instagram: "#E1306C",
  website: "#34A853",
  calls: "#2ca3ff",
  bg: "linear-gradient(145deg, #f6f9fc 0%, #f0f4f8 100%)",
  cardBg: "linear-gradient(145deg, #ffffff 0%, #f9fafc 100%)",
  glow: "0 8px 20px rgba(80, 70, 229, 0.15)",
  dropShadow: "0 12px 24px rgba(0, 0, 0, 0.08)"
};

const leadData = {
  Facebook: [
    { id: 1, name: "John Doe", phone: "1234567890", status: "New", date: "2025-02-27", avatar: "J" },
  ],
  Instagram: [
    { id: 2, name: "Jane Smith", phone: "9876543210", status: "In Progress", date: "2025-02-26", avatar: "J" },
  ],
  Website: [
    { id: 3, name: "Alice Brown", phone: "4561237890", status: "Converted", date: "2025-02-25", avatar: "A" },
  ],
  Calls: [
    { id: 4, name: "Bob Williams", phone: "7896541230", status: "Dropped", date: "2025-02-24", avatar: "B" },
  ],
};

// Animations for elements
const animations = {
  fadeIn: {
    opacity: 0,
    animation: "fadeIn 0.5s forwards",
    "@keyframes fadeIn": {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 }
    }
  },
  slideIn: {
    transform: "translateY(20px)",
    opacity: 0,
    animation: "slideIn 0.5s forwards",
    "@keyframes slideIn": {
      "0%": { transform: "translateY(20px)", opacity: 0 },
      "100%": { transform: "translateY(0)", opacity: 1 }
    }
  }
};

function LeadManagement() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [selectedSource, setSelectedSource] = useState("Facebook");
  const [leads, setLeads] = useState(leadData[selectedSource]);
  const [showForm, setShowForm] = useState(false);
  const [newLead, setNewLead] = useState({ name: "", phone: "", status: "New", date: "" });
  const [drawerOpen, setDrawerOpen] = useState(!isMobile);
  const [filterView, setFilterView] = useState(false);
  const [animateItems, setAnimateItems] = useState(false);

  // Animation trigger
  useEffect(() => {
    setAnimateItems(true);
  }, []);

  const handleSourceClick = (source) => {
    setSelectedSource(source);
    setLeads(leadData[source]);
    setAnimateItems(false);
    setTimeout(() => setAnimateItems(true), 10);
  };

  const handleChange = (e) => {
    setNewLead({ ...newLead, [e.target.name]: e.target.value });
  };

  const addLead = () => {
    const today = new Date().toISOString().split('T')[0];
    const leadWithDefaults = { 
      ...newLead, 
      id: leads.length + 1, 
      date: newLead.date || today,
      avatar: newLead.name.charAt(0)
    };
    
    const updatedLeads = [...leads, leadWithDefaults];
    setLeads(updatedLeads);
    setShowForm(false);
    setNewLead({ name: "", phone: "", status: "New", date: "" });
  };

  // Get source icon and color by name
  const getSourceDetails = (source) => {
    switch(source) {
      case 'Facebook': 
        return { icon: <FaFacebook />, color: colors.facebook, label: "Facebook Leads" };
      case 'Instagram': 
        return { icon: <FaInstagram />, color: colors.instagram, label: "Instagram Leads" };
      case 'Website': 
        return { icon: <FaGlobe />, color: colors.website, label: "Website Visits" };
      case 'Calls': 
        return { icon: <FaPhone />, color: colors.calls, label: "Phone Inquiries" };
      default: 
        return { icon: null, color: colors.primary, label: "Leads" };
    }
  };

  // Status chip style by status
  const getStatusChipProps = (status) => {
    switch(status) {
      case 'New': 
        return { 
          bgcolor: 'rgba(33, 150, 243, 0.1)', 
          color: '#1565c0',
          icon: <FaUser fontSize="small" /> 
        };
      case 'In Progress': 
        return { 
          bgcolor: 'rgba(255, 193, 7, 0.1)', 
          color: '#f57f17',
          icon: <LinearProgress 
                  sx={{ width: 30, mr: 1, height: 6, borderRadius: 3 }}
                  color="warning" 
                /> 
        };
      case 'Converted': 
        return { 
          bgcolor: 'rgba(0, 200, 83, 0.1)', 
          color: '#2e7d32',
          icon: <FaCheck fontSize="small" /> 
        };
      case 'Dropped': 
        return { 
          bgcolor: 'rgba(244, 67, 54, 0.1)', 
          color: '#c62828',
          icon: <FaTimes fontSize="small" /> 
        };
      default: 
        return { 
          bgcolor: 'rgba(0, 0, 0, 0.08)', 
          color: '#424242' 
        };
    }
  };

  const sourceDetails = getSourceDetails(selectedSource);
  const totalLeads = leads.length;
  const convertedLeads = leads.filter(lead => lead.status === "Converted").length;
  const conversionRate = totalLeads ? Math.round((convertedLeads / totalLeads) * 100) : 0;

  return (
    <Box sx={{ 
      display: 'flex', 
      minHeight: '100vh',
      background: colors.bg,
      fontFamily: "'Poppins', sans-serif",
   
    }}>
      {/* Sidebar/Drawer */}
      <Drawer
        variant={isMobile ? "temporary" : "persistent"}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          width: 260,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 260,
            boxSizing: 'border-box',
            background: colors.dark,
            color: colors.white,
            borderRight: 'none',
               marginLeft:'300px'
          },
        }}
      >
        <Box sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography 
            variant="h5" 
            component="div" 
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(45deg, #5046e5, #00c6ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            LEAD MANAGER
          </Typography>
        </Box>
        
        <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
        
        <Box sx={{ p: 2 }}>
          <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.5)' }}>
            LEAD SOURCES
          </Typography>
          
          {Object.keys(leadData).map(source => {
            const { icon, color } = getSourceDetails(source);
            return (
              <Box 
                key={source}
                onClick={() => handleSourceClick(source)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 1.5,
                  my: 1,
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  backgroundColor: selectedSource === source 
                    ? 'rgba(255,255,255,0.1)' 
                    : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.05)',
                  }
                }}
              >
                <Avatar 
                  sx={{ 
                    width: 36, 
                    height: 36, 
                    bgcolor: selectedSource === source ? color : 'rgba(255,255,255,0.1)',
                    color: selectedSource === source ? '#fff' : color,
                    mr: 2
                  }}
                >
                  {icon}
                </Avatar>
                <Typography variant="body2">{source}</Typography>
                <Chip 
                  label={leadData[source].length} 
                  size="small" 
                  sx={{ 
                    ml: 'auto', 
                    height: 24, 
                    bgcolor: selectedSource === source ? color : 'rgba(255,255,255,0.1)',
                    color: selectedSource === source ? '#fff' : color,
                  }} 
                />
              </Box>
            );
          })}
        </Box>
        
       
        
      
      </Drawer>
      
      {/* Main Content */}
      <Box 
        component="main" 
        
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          transition: theme.transitions.create(['margin'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: isMobile ? 0 : (drawerOpen ? 50 : 0),

        }}
      >
        {/* Header */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
          
            mb: 4 
          }}
        >
          <Box display="flex" alignItems="center">
            {isMobile && (
              <IconButton 
                onClick={() => setDrawerOpen(!drawerOpen)}
                sx={{ mr: 2 }}
              >
                ≡
              </IconButton>
            )}
            <Typography 
              variant="h4" 
              component="h1" 
              sx={{ 
                fontWeight: 700,
                background: 'linear-gradient(45deg, #5046e5, #00c6ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Lead Dashboard
            </Typography>
          </Box>
          
          <Button
            variant="contained"
            startIcon={<FaPlus />}
            onClick={() => setShowForm(true)}
            sx={{
              bgcolor: colors.primary,
              borderRadius: '50px',
              px: 3,
              py: 1,
              boxShadow: colors.glow,
              '&:hover': {
                bgcolor: colors.primary,
                opacity: 0.9,
              }
            }}
          >
            Add Lead
          </Button>
        </Box>
        
        {/* Stats Cards */}
        <Grow in={animateItems} timeout={300}>
          <Grid2 container spacing={3} sx={{ mb: 4 }}>
            <Grid2 item xs={12} sm={6} md={3}>
              <Card sx={{ 
                borderRadius: 4, 
                boxShadow: colors.dropShadow,
                background: colors.cardBg,
                height: '100%'
              }}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Total Leads
                  </Typography>
                  <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                    {leads.length}
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={100} 
                    sx={{ 
                      mt: 2, 
                      height: 6, 
                      borderRadius: 3,
                      bgcolor: 'rgba(80, 70, 229, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: colors.primary
                      }
                    }} 
                  />
                </CardContent>
              </Card>
            </Grid2>
            
            <Grid2 item xs={12} sm={6} md={3}>
              <Card sx={{ 
                borderRadius: 4, 
                boxShadow: colors.dropShadow,
                background: colors.cardBg,
                height: '100%'
              }}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    New Leads
                  </Typography>
                  <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                    {leads.filter(lead => lead.status === "New").length}
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={leads.filter(lead => lead.status === "New").length / leads.length * 100} 
                    sx={{ 
                      mt: 2, 
                      height: 6, 
                      borderRadius: 3,
                      bgcolor: 'rgba(33, 150, 243, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: colors.info
                      }
                    }} 
                  />
                </CardContent>
              </Card>
            </Grid2>
            
            <Grid2 item xs={12} sm={6} md={3}>
              <Card sx={{ 
                borderRadius: 4, 
                boxShadow: colors.dropShadow,
                background: colors.cardBg,
                height: '100%'
              }}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Converted
                  </Typography>
                  <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                    {leads.filter(lead => lead.status === "Converted").length}
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={convertedLeads / totalLeads * 100} 
                    sx={{ 
                      mt: 2, 
                      height: 6, 
                      borderRadius: 3,
                      bgcolor: 'rgba(0, 200, 83, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: colors.success
                      }
                    }} 
                  />
                </CardContent>
              </Card>
            </Grid2>
            
            <Grid2 item xs={12} sm={6} md={3}>
              <Card sx={{ 
                borderRadius: 4, 
                boxShadow: colors.dropShadow,
                background: colors.cardBg,
                height: '100%'
              }}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Conversion Rate
                  </Typography>
                  <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                    {conversionRate}%
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={conversionRate} 
                    sx={{ 
                      mt: 2, 
                      height: 6, 
                      borderRadius: 3,
                      bgcolor: 'rgba(244, 67, 54, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: colors.secondary
                      }
                    }} 
                  />
                </CardContent>
              </Card>
            </Grid2>
          </Grid2>
        </Grow>
        
        {/* Source Header */}
        <Fade in={animateItems} timeout={500}>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              mb: 3,
              p: 2,
              borderRadius: 3,
              bgcolor: 'rgba(80, 70, 229, 0.05)',
            }}
          >
            <Avatar sx={{ bgcolor: sourceDetails.color, mr: 2 }}>
              {sourceDetails.icon}
            </Avatar>
            <Typography variant="h6">{sourceDetails.label}</Typography>
            <Box sx={{ ml: 'auto', display: 'flex', gap: 1 }}>
              <Button 
                variant="outlined" 
                size="small"
                onClick={() => setFilterView(!filterView)}
                sx={{ 
                  borderRadius: 2,
                  borderColor: colors.primary,
                  color: colors.primary 
                }}
              >
                {filterView ? "Simple View" : "Detailed View"}
              </Button>
            </Box>
          </Box>
        </Fade>
        
        {/* Lead Table */}
        <Zoom in={animateItems} timeout={700}>
          <Card sx={{ 
            borderRadius: 4, 
            overflow: 'hidden', 
            boxShadow: colors.dropShadow,
            mb: 4
          }}>
            <TableContainer component={Box}>
              <Table sx={{ minWidth: isMobile ? 300 : 650 }}>
                <TableHead sx={{ bgcolor: 'rgba(80, 70, 229, 0.05)' }}>
                  <TableRow>
                    <TableCell>Lead</TableCell>
                    <TableCell>Contact</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Date</TableCell>
                    {filterView && <TableCell>Actions</TableCell>}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {leads.map((lead, index) => (
                    <TableRow 
                      key={lead.id}
                      sx={{
                        transition: 'all 0.2s',
                        animation: `fadeIn 0.5s ${index * 0.1}s forwards`,
                        opacity: 0,
                        '@keyframes fadeIn': {
                          '0%': { opacity: 0, transform: 'translateY(10px)' },
                          '100%': { opacity: 1, transform: 'translateY(0)' }
                        },
                        '&:hover': {
                          bgcolor: 'rgba(80, 70, 229, 0.03)',
                        }
                      }}
                    >
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar 
                            sx={{ 
                              mr: 2, 
                              bgcolor: sourceDetails.color,
                              color: '#fff',
                              width: 40,
                              height: 40
                            }}
                          >
                            {lead.avatar}
                          </Avatar>
                          <Box>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              {lead.name}
                            </Typography>
                            {filterView && (
                              <Typography variant="caption" color="textSecondary">
                                ID: {lead.id}
                              </Typography>
                            )}
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box>
                          <Typography variant="body2">
                            {lead.phone}
                          </Typography>
                          {filterView && (
                            <Typography variant="caption" color="textSecondary">
                              Via {selectedSource}
                            </Typography>
                          )}
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          {getStatusChipProps(lead.status).icon}
                          <Chip 
                            label={lead.status} 
                            size="small"
                            sx={{ 
                              bgcolor: getStatusChipProps(lead.status).bgcolor, 
                              color: getStatusChipProps(lead.status).color,
                              fontWeight: 500,
                              borderRadius: '16px'
                            }} 
                          />
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <FaCalendarAlt 
                            size={12} 
                            style={{ 
                              marginRight: '8px', 
                              color: 'rgba(0,0,0,0.5)' 
                            }} 
                          />
                          <Typography variant="body2">
                            {lead.date}
                          </Typography>
                        </Box>
                      </TableCell>
                      {filterView && (
                        <TableCell>
                          <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton 
                              size="small" 
                              sx={{ 
                                color: colors.primary,
                                bgcolor: 'rgba(80, 70, 229, 0.1)',
                                '&:hover': {
                                  bgcolor: 'rgba(80, 70, 229, 0.2)',
                                }
                              }}
                            >
                              <FaPhone size={14} />
                            </IconButton>
                            <IconButton 
                              size="small"
                              sx={{ 
                                color: colors.success,
                                bgcolor: 'rgba(0, 200, 83, 0.1)',
                                '&:hover': {
                                  bgcolor: 'rgba(0, 200, 83, 0.2)',
                                }
                              }}
                            >
                              <FaCheck size={14} />
                            </IconButton>
                          </Box>
                        </TableCell>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Zoom>
        
        {/* Add Lead Form Dialog */}
        {showForm && (
          <Zoom in={showForm}>
            <Card
              sx={{
                position: 'fixed',
                top: '10%',
                left: isMobile ? '50%' : (drawerOpen ? 'calc(50% + 130px)' : '50%'),
                transform: 'translate(-50%, -50%)',
                width: isMobile ? '90%' : 500,
                maxWidth: '100%',
                borderRadius: 4,
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                p: 3,
                zIndex: 1300,
                background: colors.cardBg
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Add New {selectedSource} Lead
                </Typography>
                <IconButton onClick={() => setShowForm(false)}>
                  <FaTimes />
                </IconButton>
              </Box>
              
              <Grid2 container spacing={2}>
                <Grid2 item xs={12}>
                  <TextField
                    label="Full Name"
                    name="name"
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}
                    value={newLead.name}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      }
                    }}
                  />
                </Grid2>
                <Grid2 item xs={12}>
                  <TextField
                    label="Phone Number"
                    name="phone"
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}
                    value={newLead.phone}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      }
                    }}
                  />
                </Grid2>
                <Grid2 item xs={12} sm={6}>
                  <TextField
                    label="Date"
                    name="date"
                    type="date"
                    fullWidth
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    onChange={handleChange}
                    value={newLead.date}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      }
                    }}
                  />
                </Grid2>
                <Grid2 item xs={12} sm={6}>
                  <Select
                    name="status"
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}
                    value={newLead.status}
                    sx={{
                      borderRadius: 2,
                      height: 56
                    }}
                  >
                    <MenuItem value="New">New</MenuItem>
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="Converted">Converted</MenuItem>
                    <MenuItem value="Dropped">Dropped</MenuItem>
                  </Select>
                </Grid2>
                <Grid2 item xs={12}>
                  <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={addLead}
                      sx={{
                        bgcolor: colors.primary,
                        borderRadius: 2,
                        py: 1.5,
                        boxShadow: colors.glow,
                        '&:hover': {
                          bgcolor: colors.primary,
                          opacity: 0.9,
                        }
                      }}
                    >
                      Add Lead
                    </Button>
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={() => setShowForm(false)}
                      sx={{
                        borderColor: 'rgba(0, 0, 0, 0.12)',
                        color: 'rgba(0, 0, 0, 0.6)',
                        borderRadius: 2,
                        py: 1.5,
                      }}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Grid2>
              </Grid2>
            </Card>
          </Zoom>
        )}
        
        {/* Background overlay when form is open */}
        {showForm && (
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1200,
            }}
            onClick={() => setShowForm(false)}
          />
        )}
      </Box>
    </Box>
  );
}

export default LeadManagement;
