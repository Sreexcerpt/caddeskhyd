import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Chip,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Container,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  Avatar,
  Badge
} from '@mui/material';
import {
  Email as EmailIcon,
  Sms as SmsIcon,
  WhatsApp as WhatsAppIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  Notifications as NotificationsIcon
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const LeadFollowup = () => {
  // Hardcoded data
  const leads = [
    { 
      id: 1, 
      name: "Sarah Johnson", 
      email: "sarah.j@example.com", 
      phone: "+1234567890",
      location: "New York",
      interest: "Computer Science",
      assigned_to: "David Miller",
      status: "Initial Contact",
      last_contact: "2025-02-25",
      next_followup: "2025-03-03",
      preferred_contact: "Email",
      notes: "Interested in summer programs, needs financial aid info"
    },
    { 
      id: 2, 
      name: "Michael Chang", 
      email: "m.chang@example.com", 
      phone: "+1987654321",
      location: "California",
      interest: "Business Studies",
      assigned_to: "Jessica Taylor",
      status: "Application Review",
      last_contact: "2025-02-28",
      next_followup: "2025-03-02",
      preferred_contact: "WhatsApp",
      notes: "Has questions about scholarship deadlines"
    },
    { 
      id: 3, 
      name: "Aisha Patel", 
      email: "aisha.p@example.com", 
      phone: "+1567891234",
      location: "Texas",
      interest: "Medicine",
      assigned_to: "David Miller",
      status: "Pending Response",
      last_contact: "2025-02-20",
      next_followup: "2025-03-01",
      preferred_contact: "SMS",
      notes: "Needs to submit transcripts"
    },
    { 
      id: 4, 
      name: "Ashok", 
      email: "ashok.p@example.com", 
      phone: "+1567891234",
      location: "Texas",
      interest: "Medicine",
      assigned_to: "David Miller",
      status: "Pending Response",
      last_contact: "2025-02-20",
      next_followup: "2025-03-01",
      preferred_contact: "SMS",
      notes: "Needs to submit transcripts"
    },
    { 
      id: 5, 
      name: "Ambika", 
      email: "ambika@example.com", 
      phone: "+1567891234",
      location: "Texas",
      interest: "Medicine",
      assigned_to: "David Miller",
      status: "Pending Response",
      last_contact: "2025-02-20",
      next_followup: "2025-03-01",
      preferred_contact: "SMS",
      notes: "Needs to submit transcripts"
    }
  ];

  const counselors = [
    { id: 1, name: "David Miller", location: "New York", specialties: ["Computer Science", "Medicine"] },
    { id: 2, name: "Jessica Taylor", location: "California", specialties: ["Business Studies", "Arts"] },
    { id: 3, name: "Robert Chen", location: "Texas", specialties: ["Engineering", "Sciences"] }
  ];

  const [selectedLead, setSelectedLead] = useState(null);
  const [reminderSent, setReminderSent] = useState({});
  const [filter, setFilter] = useState("all");
  const [statusUpdate, setStatusUpdate] = useState("");
  const [tabValue, setTabValue] = useState(0);
  const [leadNotes, setLeadNotes] = useState("");
  const [nextFollowup, setNextFollowup] = useState("");

  // Filter leads based on due date
  const filteredLeads = leads.filter(lead => {
    const today = new Date("2025-03-01").toISOString().split('T')[0];
    
    if (filter === "overdue") {
      return lead.next_followup < today;
    } else if (filter === "today") {
      return lead.next_followup === today;
    } else if (filter === "upcoming") {
      return lead.next_followup > today;
    }
    return true;
  });

  // Send reminder function
  const sendReminder = (lead) => {
    const method = lead.preferred_contact;
    setReminderSent({...reminderSent, [lead.id]: method});
    setTimeout(() => {
      setReminderSent({...reminderSent, [lead.id]: false});
    }, 3000);
  };

  // Update lead status
  const updateLeadStatus = (leadId, newStatus) => {
    // In a real app, this would update the database
    console.log(`Updated lead ${leadId} status to ${newStatus}`);
    setStatusUpdate(`Updated status for ${leads.find(l => l.id === leadId).name} to ${newStatus}`);
    setTimeout(() => setStatusUpdate(""), 3000);
  };

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Set lead details when selected
  React.useEffect(() => {
    if (selectedLead) {
      setLeadNotes(selectedLead.notes);
      setNextFollowup(selectedLead.next_followup);
    }
  }, [selectedLead]);

  // Get chip color based on status
  const getStatusColor = (status) => {
    switch(status) {
      case "Initial Contact": return { bg: '#FFF9C4', color: '#F57F17' };
      case "Application Review": return { bg: '#BBDEFB', color: '#1565C0' };
      case "Pending Response": return { bg: '#E1BEE7', color: '#6A1B9A' };
      case "Documents Required": return { bg: '#FFCCBC', color: '#D84315' };
      case "Ready for Decision": return { bg: '#C8E6C9', color: '#2E7D32' };
      case "Accepted": return { bg: '#B2DFDB', color: '#00695C' };
      case "Closed": return { bg: '#CFD8DC', color: '#455A64' };
      default: return { bg: '#EEEEEE', color: '#616161' };
    }
  };

  // Get notification count for badge
  const getNotificationCount = () => {
    const today = new Date("2025-03-01").toISOString().split('T')[0];
    return leads.filter(lead => lead.next_followup <= today).length;
  };

  return (
    <div style={{marginLeft:'300px'}}>
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        {/* App Bar */}
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Counselor Follow-up System
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={getNotificationCount()} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Avatar sx={{ ml: 2, bgcolor: '#1565C0' }}>
              {counselors[0].name.charAt(0)}
            </Avatar>
          </Toolbar>
        </AppBar>

        <Container maxWidth="xl" sx={{ mt: 4 }}>
          {/* Notification area */}
          <Snackbar 
            open={!!statusUpdate} 
            autoHideDuration={3000} 
            onClose={() => setStatusUpdate("")}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert severity="success" sx={{ width: '100%' }}>
              {statusUpdate}
            </Alert>
          </Snackbar>
          
          {/* Filters */}
          <Box sx={{ mb: 3, borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={filter === "all" ? 0 : filter === "today" ? 1 : filter === "overdue" ? 2 : 3} onChange={(e, val) => {
              setFilter(val === 0 ? "all" : val === 1 ? "today" : val === 2 ? "overdue" : "upcoming");
            }}>
              <Tab label="All Leads" />
              <Tab label="Due Today" />
              <Tab label="Overdue" />
              <Tab label="Upcoming" />
            </Tabs>
          </Box>
          
          {/* Main content */}
          <Grid container spacing={3}>
            {/* Lead list */}
            <Grid item xs={12} md={4}>
              <Paper elevation={2} sx={{ p: 2, height: '70vh', overflow: 'auto' }}>
                <Typography variant="h6" gutterBottom>
                  Leads Requiring Follow-up
                </Typography>
                <List>
                  {filteredLeads.map(lead => {
                    const statusStyle = getStatusColor(lead.status);
                    const isOverdue = new Date(lead.next_followup) < new Date("2025-03-01");
                    
                    return (
                      <Card 
                        key={lead.id} 
                        sx={{ 
                          mb: 2, 
                          cursor: 'pointer',
                          border: selectedLead?.id === lead.id ? `1px solid ${theme.palette.primary.main}` : 'none',
                          boxShadow: selectedLead?.id === lead.id ? 3 : 1
                        }}
                        onClick={() => setSelectedLead(lead)}
                      >
                        <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                          <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                            <Box>
                              <Typography variant="subtitle1" component="div" fontWeight="medium">
                                {lead.name}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {lead.interest} - {lead.location}
                              </Typography>
                            </Box>
                            <Box textAlign="right">
                              <Typography 
                                variant="body2" 
                                fontWeight="medium"
                                color={isOverdue ? 'error.main' : 'primary.main'}
                              >
                                {lead.next_followup}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {lead.assigned_to}
                              </Typography>
                            </Box>
                          </Box>
                          <Box mt={1.5} display="flex" justifyContent="space-between" alignItems="center">
                            <Chip 
                              label={lead.status} 
                              size="small"
                              sx={{ 
                                backgroundColor: statusStyle.bg,
                                color: statusStyle.color,
                                fontSize: '0.75rem',
                                height: 24
                              }}
                            />
                            <Button
                              size="small"
                              variant="outlined"
                              color="primary"
                              onClick={(e) => {
                                e.stopPropagation();
                                sendReminder(lead);
                              }}
                              sx={{ fontSize: '0.75rem', py: 0.5 }}
                            >
                              {reminderSent[lead.id] ? `Sent via ${reminderSent[lead.id]}` : "Send Reminder"}
                            </Button>
                          </Box>
                        </CardContent>
                      </Card>
                    );
                  })}
                </List>
              </Paper>
            </Grid>
            
            {/* Lead details */}
            <Grid item xs={12} md={8}>
              <Paper elevation={2} sx={{ p: 3, height: '70vh', overflow: 'auto' }}>
                {selectedLead ? (
                  <Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                      <Typography variant="h5" fontWeight="bold">
                        {selectedLead.name}
                      </Typography>
                      <FormControl variant="outlined" size="small" sx={{ minWidth: 200 }}>
                        <InputLabel>Status</InputLabel>
                        <Select
                          value={selectedLead.status}
                          onChange={(e) => updateLeadStatus(selectedLead.id, e.target.value)}
                          label="Status"
                        >
                          <MenuItem value="Initial Contact">Initial Contact</MenuItem>
                          <MenuItem value="Application Review">Application Review</MenuItem>
                          <MenuItem value="Pending Response">Pending Response</MenuItem>
                          <MenuItem value="Documents Required">Documents Required</MenuItem>
                          <MenuItem value="Ready for Decision">Ready for Decision</MenuItem>
                          <MenuItem value="Accepted">Accepted</MenuItem>
                          <MenuItem value="Closed">Closed</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    
                    <Grid container spacing={3} mb={3}>
                      <Grid item xs={12} md={6}>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                          Contact Information
                        </Typography>
                        <Typography variant="body1" paragraph>
                          <strong>Email:</strong> {selectedLead.email}
                        </Typography>
                        <Typography variant="body1" paragraph>
                          <strong>Phone:</strong> {selectedLead.phone}
                        </Typography>
                        <Typography variant="body1">
                          <strong>Preferred Contact:</strong> {selectedLead.preferred_contact}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                          Application Details
                        </Typography>
                        <Typography variant="body1" paragraph>
                          <strong>Interest:</strong> {selectedLead.interest}
                        </Typography>
                        <Typography variant="body1" paragraph>
                          <strong>Location:</strong> {selectedLead.location}
                        </Typography>
                        <Typography variant="body1">
                          <strong>Status:</strong> {selectedLead.status}
                        </Typography>
                      </Grid>
                    </Grid>
                    
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      Follow-up Schedule
                    </Typography>
                    <Grid container spacing={3} mb={3}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Last Contact"
                          type="date"
                          value={selectedLead.last_contact}
                          InputProps={{
                            readOnly: true,
                          }}
                          fullWidth
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Next Follow-up"
                          type="date"
                          value={nextFollowup}
                          onChange={(e) => setNextFollowup(e.target.value)}
                          fullWidth
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                    </Grid>
                    
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      Notes
                    </Typography>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      value={leadNotes}
                      onChange={(e) => setLeadNotes(e.target.value)}
                      variant="outlined"
                      sx={{ mb: 3 }}
                    />
                    
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      Communication Tools
                    </Typography>
                    <Box display="flex" gap={2} mb={4}>
                      <Button 
                        variant="outlined" 
                        startIcon={<EmailIcon />}
                        color="primary"
                      >
                        Email
                      </Button>
                      <Button 
                        variant="outlined" 
                        startIcon={<SmsIcon />}
                        color="secondary"
                      >
                        SMS
                      </Button>
                      <Button 
                        variant="outlined" 
                        startIcon={<WhatsAppIcon />}
                        sx={{ color: '#25D366', borderColor: '#25D366' }}
                      >
                        WhatsApp
                      </Button>
                    </Box>
                    
                    <Box display="flex" justifyContent="flex-end" gap={2}>
                      <Button variant="outlined" startIcon={<CancelIcon />}>
                        Cancel
                      </Button>
                      <Button variant="contained" startIcon={<SaveIcon />} color="primary">
                        Save Changes
                      </Button>
                    </Box>
                  </Box>
                ) : (
                  <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                    <Typography color="text.secondary">
                      Select a lead from the list to view details
                    </Typography>
                  </Box>
                )}
              </Paper>
            </Grid>
          </Grid>
          
          {/* Activity Log Section */}
          <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
            <Typography variant="h6" fontWeight="medium" gutterBottom>
              Counselor Activity Log
            </Typography>
            <List>
              <ListItem divider>
                <ListItemText
                  primary={
                    <Box display="flex" justifyContent="space-between">
                      <Typography variant="body1">
                        <strong>David Miller</strong>
                        <span style={{ color: 'rgba(0, 0, 0, 0.6)', marginLeft: 8 }}>updated status for</span>
                        <strong style={{ marginLeft: 8 }}>Aisha Patel</strong>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Today, 9:45 AM
                      </Typography>
                    </Box>
                  }
                  secondary="Changed status from 'Initial Contact' to 'Pending Response'"
                />
              </ListItem>
              
              <ListItem divider>
                <ListItemText
                  primary={
                    <Box display="flex" justifyContent="space-between">
                      <Typography variant="body1">
                        <strong>Jessica Taylor</strong>
                        <span style={{ color: 'rgba(0, 0, 0, 0.6)', marginLeft: 8 }}>sent an email to</span>
                        <strong style={{ marginLeft: 8 }}>Michael Chang</strong>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Today, 8:30 AM
                      </Typography>
                    </Box>
                  }
                  secondary="Regarding scholarship deadline information and next steps"
                />
              </ListItem>
              
              <ListItem divider>
                <ListItemText
                  primary={
                    <Box display="flex" justifyContent="space-between">
                      <Typography variant="body1">
                        <strong>David Miller</strong>
                        <span style={{ color: 'rgba(0, 0, 0, 0.6)', marginLeft: 8 }}>scheduled a follow-up with</span>
                        <strong style={{ marginLeft: 8 }}>Sarah Johnson</strong>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Yesterday, 4:15 PM
                      </Typography>
                    </Box>
                  }
                  secondary="Next follow-up on 2025-03-03 to discuss financial aid options"
                />
              </ListItem>
            </List>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
    </div>
  );
};

export default LeadFollowup;