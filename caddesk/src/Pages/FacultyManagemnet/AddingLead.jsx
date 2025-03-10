// import { useState, useEffect } from "react";
// import { FaFacebook, FaInstagram, FaGlobe, FaPhone, FaPlus, FaTimes, FaUser, FaCalendarAlt, FaCheck } from "react-icons/fa";
// import { 
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
//   Paper, Button, TextField, Select, MenuItem, Box, IconButton,
//   Grid2, Typography, useMediaQuery, useTheme, Avatar, Chip, Fade, Zoom, Grow,
//   Card, CardContent, LinearProgress, Badge, Drawer, Divider
// } from "@mui/material";

// // Custom color palette
// const colors = {
//   primary: "#5046e5",
//   secondary: "#f50057",
//   success: "#00c853",
//   warning: "#ffc107",
//   info: "#2196f3",
//   dark: "#0a1929",
//   light: "#f9fafc",
//   white: "#ffffff",
//   facebook: "#1877F2",
//   instagram: "#E1306C",
//   website: "#34A853",
//   calls: "#2ca3ff",
//   bg: "linear-gradient(145deg, #f6f9fc 0%, #f0f4f8 100%)",
//   cardBg: "linear-gradient(145deg, #ffffff 0%, #f9fafc 100%)",
//   glow: "0 8px 20px rgba(80, 70, 229, 0.15)",
//   dropShadow: "0 12px 24px rgba(0, 0, 0, 0.08)"
// };

// const leadData = {
//   Facebook: [
//     { id: 1, name: "John Doe", phone: "1234567890", status: "New", date: "2025-02-27", avatar: "J" },
//   ],
//   Instagram: [
//     { id: 2, name: "Jane Smith", phone: "9876543210", status: "In Progress", date: "2025-02-26", avatar: "J" },
//   ],
//   Website: [
//     { id: 3, name: "Alice Brown", phone: "4561237890", status: "Converted", date: "2025-02-25", avatar: "A" },
//   ],
//   Calls: [
//     { id: 4, name: "Bob Williams", phone: "7896541230", status: "Dropped", date: "2025-02-24", avatar: "B" },
//   ],
// };

// // Animations for elements
// const animations = {
//   fadeIn: {
//     opacity: 0,
//     animation: "fadeIn 0.5s forwards",
//     "@keyframes fadeIn": {
//       "0%": { opacity: 0 },
//       "100%": { opacity: 1 }
//     }
//   },
//   slideIn: {
//     transform: "translateY(20px)",
//     opacity: 0,
//     animation: "slideIn 0.5s forwards",
//     "@keyframes slideIn": {
//       "0%": { transform: "translateY(20px)", opacity: 0 },
//       "100%": { transform: "translateY(0)", opacity: 1 }
//     }
//   }
// };

// function LeadManagement() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
//   const [selectedSource, setSelectedSource] = useState("Facebook");
//   const [leads, setLeads] = useState(leadData[selectedSource]);
//   const [showForm, setShowForm] = useState(false);
//   const [newLead, setNewLead] = useState({ name: "", phone: "", status: "New", date: "" });
//   const [drawerOpen, setDrawerOpen] = useState(!isMobile);
//   const [filterView, setFilterView] = useState(false);
//   const [animateItems, setAnimateItems] = useState(false);

//   // Animation trigger
//   useEffect(() => {
//     setAnimateItems(true);
//   }, []);

//   const handleSourceClick = (source) => {
//     setSelectedSource(source);
//     setLeads(leadData[source]);
//     setAnimateItems(false);
//     setTimeout(() => setAnimateItems(true), 10);
//   };

//   const handleChange = (e) => {
//     setNewLead({ ...newLead, [e.target.name]: e.target.value });
//   };

//   const addLead = () => {
//     const today = new Date().toISOString().split('T')[0];
//     const leadWithDefaults = { 
//       ...newLead, 
//       id: leads.length + 1, 
//       date: newLead.date || today,
//       avatar: newLead.name.charAt(0)
//     };
    
//     const updatedLeads = [...leads, leadWithDefaults];
//     setLeads(updatedLeads);
//     setShowForm(false);
//     setNewLead({ name: "", phone: "", status: "New", date: "" });
//   };

//   // Get source icon and color by name
//   const getSourceDetails = (source) => {
//     switch(source) {
//       case 'Facebook': 
//         return { icon: <FaFacebook />, color: colors.facebook, label: "Facebook Leads" };
//       case 'Instagram': 
//         return { icon: <FaInstagram />, color: colors.instagram, label: "Instagram Leads" };
//       case 'Website': 
//         return { icon: <FaGlobe />, color: colors.website, label: "Website Visits" };
//       case 'Calls': 
//         return { icon: <FaPhone />, color: colors.calls, label: "Phone Inquiries" };
//       default: 
//         return { icon: null, color: colors.primary, label: "Leads" };
//     }
//   };

//   // Status chip style by status
//   const getStatusChipProps = (status) => {
//     switch(status) {
//       case 'New': 
//         return { 
//           bgcolor: 'rgba(33, 150, 243, 0.1)', 
//           color: '#1565c0',
//           icon: <FaUser fontSize="small" /> 
//         };
//       case 'In Progress': 
//         return { 
//           bgcolor: 'rgba(255, 193, 7, 0.1)', 
//           color: '#f57f17',
//           icon: <LinearProgress 
//                   sx={{ width: 30, mr: 1, height: 6, borderRadius: 3 }}
//                   color="warning" 
//                 /> 
//         };
//       case 'Converted': 
//         return { 
//           bgcolor: 'rgba(0, 200, 83, 0.1)', 
//           color: '#2e7d32',
//           icon: <FaCheck fontSize="small" /> 
//         };
//       case 'Dropped': 
//         return { 
//           bgcolor: 'rgba(244, 67, 54, 0.1)', 
//           color: '#c62828',
//           icon: <FaTimes fontSize="small" /> 
//         };
//       default: 
//         return { 
//           bgcolor: 'rgba(0, 0, 0, 0.08)', 
//           color: '#424242' 
//         };
//     }
//   };

//   const sourceDetails = getSourceDetails(selectedSource);
//   const totalLeads = leads.length;
//   const convertedLeads = leads.filter(lead => lead.status === "Converted").length;
//   const conversionRate = totalLeads ? Math.round((convertedLeads / totalLeads) * 100) : 0;

//   return (
//     <Box sx={{ 
//       display: 'flex', 
//       minHeight: '100vh',
//       background: colors.bg,
//       fontFamily: "'Poppins', sans-serif",
   
//     }}>
//       {/* Sidebar/Drawer */}
//       <Drawer
//         variant={isMobile ? "temporary" : "persistent"}
//         open={drawerOpen}
//         onClose={() => setDrawerOpen(false)}
//         sx={{
//           width: 260,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: 260,
//             boxSizing: 'border-box',
//             background: colors.dark,
//             color: colors.white,
//             borderRight: 'none',
//                marginLeft:'300px'
//           },
//         }}
//       >
//         <Box sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//           <Typography 
//             variant="h5" 
//             component="div" 
//             sx={{ 
//               fontWeight: 700,
//               background: 'linear-gradient(45deg, #5046e5, #00c6ff)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent'
//             }}
//           >
//             LEAD MANAGER
//           </Typography>
//         </Box>
        
//         <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
        
//         <Box sx={{ p: 2 }}>
//           <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.5)' }}>
//             LEAD SOURCES
//           </Typography>
          
//           {Object.keys(leadData).map(source => {
//             const { icon, color } = getSourceDetails(source);
//             return (
//               <Box 
//                 key={source}
//                 onClick={() => handleSourceClick(source)}
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   p: 1.5,
//                   my: 1,
//                   borderRadius: 2,
//                   cursor: 'pointer',
//                   transition: 'all 0.2s',
//                   backgroundColor: selectedSource === source 
//                     ? 'rgba(255,255,255,0.1)' 
//                     : 'transparent',
//                   '&:hover': {
//                     backgroundColor: 'rgba(255,255,255,0.05)',
//                   }
//                 }}
//               >
//                 <Avatar 
//                   sx={{ 
//                     width: 36, 
//                     height: 36, 
//                     bgcolor: selectedSource === source ? color : 'rgba(255,255,255,0.1)',
//                     color: selectedSource === source ? '#fff' : color,
//                     mr: 2
//                   }}
//                 >
//                   {icon}
//                 </Avatar>
//                 <Typography variant="body2">{source}</Typography>
//                 <Chip 
//                   label={leadData[source].length} 
//                   size="small" 
//                   sx={{ 
//                     ml: 'auto', 
//                     height: 24, 
//                     bgcolor: selectedSource === source ? color : 'rgba(255,255,255,0.1)',
//                     color: selectedSource === source ? '#fff' : color,
//                   }} 
//                 />
//               </Box>
//             );
//           })}
//         </Box>
        
       
        
      
//       </Drawer>
      
//       {/* Main Content */}
//       <Box 
//         component="main" 
        
//         sx={{ 
//           flexGrow: 1, 
//           p: 3, 
//           transition: theme.transitions.create(['margin'], {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//           }),
//           marginLeft: isMobile ? 0 : (drawerOpen ? 50 : 0),

//         }}
//       >
//         {/* Header */}
//         <Box 
//           sx={{ 
//             display: 'flex', 
//             justifyContent: 'space-between', 
//             alignItems: 'center', 
          
//             mb: 4 
//           }}
//         >
//           <Box display="flex" alignItems="center">
//             {isMobile && (
//               <IconButton 
//                 onClick={() => setDrawerOpen(!drawerOpen)}
//                 sx={{ mr: 2 }}
//               >
//                 ≡
//               </IconButton>
//             )}
//             <Typography 
//               variant="h4" 
//               component="h1" 
//               sx={{ 
//                 fontWeight: 700,
//                 background: 'linear-gradient(45deg, #5046e5, #00c6ff)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent'
//               }}
//             >
//               Lead Dashboard
//             </Typography>
//           </Box>
          
//           <Button
//             variant="contained"
//             startIcon={<FaPlus />}
//             onClick={() => setShowForm(true)}
//             sx={{
//               bgcolor: colors.primary,
//               borderRadius: '50px',
//               px: 3,
//               py: 1,
//               boxShadow: colors.glow,
//               '&:hover': {
//                 bgcolor: colors.primary,
//                 opacity: 0.9,
//               }
//             }}
//           >
//             Add Lead
//           </Button>
//         </Box>
        
//         {/* Stats Cards */}
//         <Grow in={animateItems} timeout={300}>
//           <Grid2 container spacing={3} sx={{ mb: 4 }}>
//             <Grid2 item xs={12} sm={6} md={3}>
//               <Card sx={{ 
//                 borderRadius: 4, 
//                 boxShadow: colors.dropShadow,
//                 background: colors.cardBg,
//                 height: '100%'
//               }}>
//                 <CardContent>
//                   <Typography color="textSecondary" gutterBottom>
//                     Total Leads
//                   </Typography>
//                   <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
//                     {leads.length}
//                   </Typography>
//                   <LinearProgress 
//                     variant="determinate" 
//                     value={100} 
//                     sx={{ 
//                       mt: 2, 
//                       height: 6, 
//                       borderRadius: 3,
//                       bgcolor: 'rgba(80, 70, 229, 0.1)',
//                       '& .MuiLinearProgress-bar': {
//                         bgcolor: colors.primary
//                       }
//                     }} 
//                   />
//                 </CardContent>
//               </Card>
//             </Grid2>
            
//             <Grid2 item xs={12} sm={6} md={3}>
//               <Card sx={{ 
//                 borderRadius: 4, 
//                 boxShadow: colors.dropShadow,
//                 background: colors.cardBg,
//                 height: '100%'
//               }}>
//                 <CardContent>
//                   <Typography color="textSecondary" gutterBottom>
//                     New Leads
//                   </Typography>
//                   <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
//                     {leads.filter(lead => lead.status === "New").length}
//                   </Typography>
//                   <LinearProgress 
//                     variant="determinate" 
//                     value={leads.filter(lead => lead.status === "New").length / leads.length * 100} 
//                     sx={{ 
//                       mt: 2, 
//                       height: 6, 
//                       borderRadius: 3,
//                       bgcolor: 'rgba(33, 150, 243, 0.1)',
//                       '& .MuiLinearProgress-bar': {
//                         bgcolor: colors.info
//                       }
//                     }} 
//                   />
//                 </CardContent>
//               </Card>
//             </Grid2>
            
//             <Grid2 item xs={12} sm={6} md={3}>
//               <Card sx={{ 
//                 borderRadius: 4, 
//                 boxShadow: colors.dropShadow,
//                 background: colors.cardBg,
//                 height: '100%'
//               }}>
//                 <CardContent>
//                   <Typography color="textSecondary" gutterBottom>
//                     Converted
//                   </Typography>
//                   <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
//                     {leads.filter(lead => lead.status === "Converted").length}
//                   </Typography>
//                   <LinearProgress 
//                     variant="determinate" 
//                     value={convertedLeads / totalLeads * 100} 
//                     sx={{ 
//                       mt: 2, 
//                       height: 6, 
//                       borderRadius: 3,
//                       bgcolor: 'rgba(0, 200, 83, 0.1)',
//                       '& .MuiLinearProgress-bar': {
//                         bgcolor: colors.success
//                       }
//                     }} 
//                   />
//                 </CardContent>
//               </Card>
//             </Grid2>
            
//             <Grid2 item xs={12} sm={6} md={3}>
//               <Card sx={{ 
//                 borderRadius: 4, 
//                 boxShadow: colors.dropShadow,
//                 background: colors.cardBg,
//                 height: '100%'
//               }}>
//                 <CardContent>
//                   <Typography color="textSecondary" gutterBottom>
//                     Conversion Rate
//                   </Typography>
//                   <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
//                     {conversionRate}%
//                   </Typography>
//                   <LinearProgress 
//                     variant="determinate" 
//                     value={conversionRate} 
//                     sx={{ 
//                       mt: 2, 
//                       height: 6, 
//                       borderRadius: 3,
//                       bgcolor: 'rgba(244, 67, 54, 0.1)',
//                       '& .MuiLinearProgress-bar': {
//                         bgcolor: colors.secondary
//                       }
//                     }} 
//                   />
//                 </CardContent>
//               </Card>
//             </Grid2>
//           </Grid2>
//         </Grow>
        
//         {/* Source Header */}
//         <Fade in={animateItems} timeout={500}>
//           <Box 
//             sx={{ 
//               display: 'flex', 
//               alignItems: 'center', 
//               mb: 3,
//               p: 2,
//               borderRadius: 3,
//               bgcolor: 'rgba(80, 70, 229, 0.05)',
//             }}
//           >
//             <Avatar sx={{ bgcolor: sourceDetails.color, mr: 2 }}>
//               {sourceDetails.icon}
//             </Avatar>
//             <Typography variant="h6">{sourceDetails.label}</Typography>
//             <Box sx={{ ml: 'auto', display: 'flex', gap: 1 }}>
//               <Button 
//                 variant="outlined" 
//                 size="small"
//                 onClick={() => setFilterView(!filterView)}
//                 sx={{ 
//                   borderRadius: 2,
//                   borderColor: colors.primary,
//                   color: colors.primary 
//                 }}
//               >
//                 {filterView ? "Simple View" : "Detailed View"}
//               </Button>
//             </Box>
//           </Box>
//         </Fade>
        
//         {/* Lead Table */}
//         <Zoom in={animateItems} timeout={700}>
//           <Card sx={{ 
//             borderRadius: 4, 
//             overflow: 'hidden', 
//             boxShadow: colors.dropShadow,
//             mb: 4
//           }}>
//             <TableContainer component={Box}>
//               <Table sx={{ minWidth: isMobile ? 300 : 650 }}>
//                 <TableHead sx={{ bgcolor: 'rgba(80, 70, 229, 0.05)' }}>
//                   <TableRow>
//                     <TableCell>Lead</TableCell>
//                     <TableCell>Contact</TableCell>
//                     <TableCell>Status</TableCell>
//                     <TableCell>Date</TableCell>
//                     {filterView && <TableCell>Actions</TableCell>}
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {leads.map((lead, index) => (
//                     <TableRow 
//                       key={lead.id}
//                       sx={{
//                         transition: 'all 0.2s',
//                         animation: `fadeIn 0.5s ${index * 0.1}s forwards`,
//                         opacity: 0,
//                         '@keyframes fadeIn': {
//                           '0%': { opacity: 0, transform: 'translateY(10px)' },
//                           '100%': { opacity: 1, transform: 'translateY(0)' }
//                         },
//                         '&:hover': {
//                           bgcolor: 'rgba(80, 70, 229, 0.03)',
//                         }
//                       }}
//                     >
//                       <TableCell>
//                         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                           <Avatar 
//                             sx={{ 
//                               mr: 2, 
//                               bgcolor: sourceDetails.color,
//                               color: '#fff',
//                               width: 40,
//                               height: 40
//                             }}
//                           >
//                             {lead.avatar}
//                           </Avatar>
//                           <Box>
//                             <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                               {lead.name}
//                             </Typography>
//                             {filterView && (
//                               <Typography variant="caption" color="textSecondary">
//                                 ID: {lead.id}
//                               </Typography>
//                             )}
//                           </Box>
//                         </Box>
//                       </TableCell>
//                       <TableCell>
//                         <Box>
//                           <Typography variant="body2">
//                             {lead.phone}
//                           </Typography>
//                           {filterView && (
//                             <Typography variant="caption" color="textSecondary">
//                               Via {selectedSource}
//                             </Typography>
//                           )}
//                         </Box>
//                       </TableCell>
//                       <TableCell>
//                         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                           {getStatusChipProps(lead.status).icon}
//                           <Chip 
//                             label={lead.status} 
//                             size="small"
//                             sx={{ 
//                               bgcolor: getStatusChipProps(lead.status).bgcolor, 
//                               color: getStatusChipProps(lead.status).color,
//                               fontWeight: 500,
//                               borderRadius: '16px'
//                             }} 
//                           />
//                         </Box>
//                       </TableCell>
//                       <TableCell>
//                         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                           <FaCalendarAlt 
//                             size={12} 
//                             style={{ 
//                               marginRight: '8px', 
//                               color: 'rgba(0,0,0,0.5)' 
//                             }} 
//                           />
//                           <Typography variant="body2">
//                             {lead.date}
//                           </Typography>
//                         </Box>
//                       </TableCell>
//                       {filterView && (
//                         <TableCell>
//                           <Box sx={{ display: 'flex', gap: 1 }}>
//                             <IconButton 
//                               size="small" 
//                               sx={{ 
//                                 color: colors.primary,
//                                 bgcolor: 'rgba(80, 70, 229, 0.1)',
//                                 '&:hover': {
//                                   bgcolor: 'rgba(80, 70, 229, 0.2)',
//                                 }
//                               }}
//                             >
//                               <FaPhone size={14} />
//                             </IconButton>
//                             <IconButton 
//                               size="small"
//                               sx={{ 
//                                 color: colors.success,
//                                 bgcolor: 'rgba(0, 200, 83, 0.1)',
//                                 '&:hover': {
//                                   bgcolor: 'rgba(0, 200, 83, 0.2)',
//                                 }
//                               }}
//                             >
//                               <FaCheck size={14} />
//                             </IconButton>
//                           </Box>
//                         </TableCell>
//                       )}
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Card>
//         </Zoom>
        
//         {/* Add Lead Form Dialog */}
//         {showForm && (
//           <Zoom in={showForm}>
//             <Card
//               sx={{
//                 position: 'fixed',
//                 top: '10%',
//                 left: isMobile ? '50%' : (drawerOpen ? 'calc(50% + 130px)' : '50%'),
//                 transform: 'translate(-50%, -50%)',
//                 width: isMobile ? '90%' : 500,
//                 maxWidth: '100%',
//                 borderRadius: 4,
//                 boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
//                 p: 3,
//                 zIndex: 1300,
//                 background: colors.cardBg
//               }}
//             >
//               <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
//                 <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                   Add New {selectedSource} Lead
//                 </Typography>
//                 <IconButton onClick={() => setShowForm(false)}>
//                   <FaTimes />
//                 </IconButton>
//               </Box>
              
//               <Grid2 container spacing={2}>
//                 <Grid2 item xs={12}>
//                   <TextField
//                     label="Full Name"
//                     name="name"
//                     fullWidth
//                     variant="outlined"
//                     onChange={handleChange}
//                     value={newLead.name}
//                     required
//                     sx={{
//                       '& .MuiOutlinedInput-root': {
//                         borderRadius: 2,
//                       }
//                     }}
//                   />
//                 </Grid2>
//                 <Grid2 item xs={12}>
//                   <TextField
//                     label="Phone Number"
//                     name="phone"
//                     fullWidth
//                     variant="outlined"
//                     onChange={handleChange}
//                     value={newLead.phone}
//                     required
//                     sx={{
//                       '& .MuiOutlinedInput-root': {
//                         borderRadius: 2,
//                       }
//                     }}
//                   />
//                 </Grid2>
//                 <Grid2 item xs={12} sm={6}>
//                   <TextField
//                     label="Date"
//                     name="date"
//                     type="date"
//                     fullWidth
//                     variant="outlined"
//                     InputLabelProps={{ shrink: true }}
//                     onChange={handleChange}
//                     value={newLead.date}
//                     sx={{
//                       '& .MuiOutlinedInput-root': {
//                         borderRadius: 2,
//                       }
//                     }}
//                   />
//                 </Grid2>
//                 <Grid2 item xs={12} sm={6}>
//                   <Select
//                     name="status"
//                     fullWidth
//                     variant="outlined"
//                     onChange={handleChange}
//                     value={newLead.status}
//                     sx={{
//                       borderRadius: 2,
//                       height: 56
//                     }}
//                   >
//                     <MenuItem value="New">New</MenuItem>
//                     <MenuItem value="In Progress">In Progress</MenuItem>
//                     <MenuItem value="Converted">Converted</MenuItem>
//                     <MenuItem value="Dropped">Dropped</MenuItem>
//                   </Select>
//                 </Grid2>
//                 <Grid2 item xs={12}>
//                   <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
//                     <Button
//                       variant="contained"
//                       fullWidth
//                       onClick={addLead}
//                       sx={{
//                         bgcolor: colors.primary,
//                         borderRadius: 2,
//                         py: 1.5,
//                         boxShadow: colors.glow,
//                         '&:hover': {
//                           bgcolor: colors.primary,
//                           opacity: 0.9,
//                         }
//                       }}
//                     >
//                       Add Lead
//                     </Button>
//                     <Button
//                       variant="outlined"
//                       fullWidth
//                       onClick={() => setShowForm(false)}
//                       sx={{
//                         borderColor: 'rgba(0, 0, 0, 0.12)',
//                         color: 'rgba(0, 0, 0, 0.6)',
//                         borderRadius: 2,
//                         py: 1.5,
//                       }}
//                     >
//                       Cancel
//                     </Button>
//                   </Box>
//                 </Grid2>
//               </Grid2>
//             </Card>
//           </Zoom>
//         )}
        
//         {/* Background overlay when form is open */}
//         {showForm && (
//           <Box
//             sx={{
//               position: 'fixed',
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               bgcolor: 'rgba(0, 0, 0, 0.5)',
//               zIndex: 1200,
//             }}
//             onClick={() => setShowForm(false)}
//           />
//         )}
//       </Box>
//     </Box>
//   );
// }

// export default LeadManagement;


import React from 'react'
import { SiInstagram } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";

const LeadManagement = () => {
  return (
    <div>
      <div class="page-wrapper">
			<div class="content">

				<div class="row">
					<div class="col-md-12">

						{/* <!-- Page Header --> */}
						<div class="page-header">
							<div class="row align-items-center">
								<div class="col-8">
									<h4 class="page-title">Lead Manager<span class="count-title">1200</span></h4>
								</div>
								<div class="col-4 text-end">
									<div class="head-icons">
										<a href="" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i class="ti ti-refresh-dot"></i></a>
										<a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Collapse" id="collapse-header"><i class="ti ti-chevrons-up"></i></a>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- /Page Header --> */}

						<div class="row">
							<div class="col-xl-3 col-md-6 d-flex">
								<div class="card flex-fill">
									<div class="card-body ">
										<div class="border-bottom pb-3 mb-3">
											<div class="row align-items-center">
												<div class="col-7">
													<div>
														<span class="fs-14 fw-normal text-truncate mb-1">Total Leads</span>
														<h5>540</h5>
													</div>
												</div>
												<div class="col-5">
													<div>
														<span class="subscription-line-1" data-width="100%">
                            <svg class="peity" height="35" width="100%"><polygon fill="#F7A37A" points="0 34.5 0 11.833333333333336 3.851973684210526 26.944444444444443 7.703947368421052 4.277777777777779 11.555921052631579 19.38888888888889 15.407894736842104 23.166666666666668 19.25986842105263 4.277777777777779 23.111842105263158 30.72222222222222 26.96381578947368 23.166666666666668 30.81578947368421 11.833333333333336 34.66776315789473 15.61111111111111 38.51973684210526 0.5 42.37171052631579 26.944444444444443 46.223684210526315 4.277777777777779 50.07565789473684 30.72222222222222 53.92763157894736 19.38888888888889 57.77960526315789 4.277777777777779 61.63157894736842 0.5 65.48355263157895 4.277777777777779 69.33552631578947 26.944444444444443 73.1875 30.72222222222222 73.1875 34.5"></polygon><polyline fill="none" points="0 11.833333333333336 3.851973684210526 26.944444444444443 7.703947368421052 4.277777777777779 11.555921052631579 19.38888888888889 15.407894736842104 23.166666666666668 19.25986842105263 4.277777777777779 23.111842105263158 30.72222222222222 26.96381578947368 23.166666666666668 30.81578947368421 11.833333333333336 34.66776315789473 15.61111111111111 38.51973684210526 0.5 42.37171052631579 26.944444444444443 46.223684210526315 4.277777777777779 50.07565789473684 30.72222222222222 53.92763157894736 19.38888888888889 57.77960526315789 4.277777777777779 61.63157894736842 0.5 65.48355263157895 4.277777777777779 69.33552631578947 26.944444444444443 73.1875 30.72222222222222" stroke="#F7A37A" stroke-width="1" stroke-linecap="square"></polyline></svg>
                            </span>
													</div>
												</div>
											</div>
										</div>
										<div class="d-flex">
											<p class="fs-12 fw-normal d-flex align-items-center text-truncate">
												<span class="text-primary fs-12 d-flex align-items-center me-1">
												<i class="ti ti-arrow-wave-right-up me-1"></i>+19.01%</span>from
												last week
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-md-6 d-flex">
								<div class="card flex-fill">
									<div class="card-body ">
										<div class="border-bottom pb-3 mb-3">
											<div class="row align-items-center">
												<div class="col-7">
													<div>
														<span class="fs-14 fw-normal text-truncate mb-1">Total Classes</span>
														<h5>600</h5>
													</div>
												</div>
												<div class="col-5">
													<div>
														<span class="subscription-line-2" data-width="100%"><svg class="peity" height="35" width="100%"><polygon fill="#70b0ff" points="0 34.5 0 11.833333333333336 3.851973684210526 26.944444444444443 7.703947368421052 4.277777777777779 11.555921052631579 19.38888888888889 15.407894736842104 23.166666666666668 19.25986842105263 4.277777777777779 23.111842105263158 30.72222222222222 26.96381578947368 23.166666666666668 30.81578947368421 11.833333333333336 34.66776315789473 15.61111111111111 38.51973684210526 0.5 42.37171052631579 26.944444444444443 46.223684210526315 4.277777777777779 50.07565789473684 30.72222222222222 53.92763157894736 19.38888888888889 57.77960526315789 4.277777777777779 61.63157894736842 0.5 65.48355263157895 4.277777777777779 69.33552631578947 26.944444444444443 73.1875 30.72222222222222 73.1875 34.5"></polygon><polyline fill="none" points="0 11.833333333333336 3.851973684210526 26.944444444444443 7.703947368421052 4.277777777777779 11.555921052631579 19.38888888888889 15.407894736842104 23.166666666666668 19.25986842105263 4.277777777777779 23.111842105263158 30.72222222222222 26.96381578947368 23.166666666666668 30.81578947368421 11.833333333333336 34.66776315789473 15.61111111111111 38.51973684210526 0.5 42.37171052631579 26.944444444444443 46.223684210526315 4.277777777777779 50.07565789473684 30.72222222222222 53.92763157894736 19.38888888888889 57.77960526315789 4.277777777777779 61.63157894736842 0.5 65.48355263157895 4.277777777777779 69.33552631578947 26.944444444444443 73.1875 30.72222222222222" stroke="#70b0ff" stroke-width="1" stroke-linecap="square"></polyline></svg></span>
													</div>
												</div>
											</div>
										</div>
										<div class="d-flex">
											<p class="fs-12 fw-normal d-flex align-items-center text-truncate">
												<span class="text-primary fs-12 d-flex align-items-center me-1">
												<i class="ti ti-arrow-wave-right-up me-1"></i>+19.01%</span>from
												last week
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-md-6 d-flex">
								<div class="card flex-fill">
									<div class="card-body ">
										<div class="border-bottom pb-3 mb-3">
											<div class="row align-items-center">
												<div class="col-7">
													<div>
														<span class="fs-14 fw-normal text-truncate mb-1">Available Slots</span>
														<h5>560</h5>
													</div>
												</div>
												<div class="col-5">
													<div>
														<span class="subscription-line-3" data-width="100%"><svg class="peity" height="35" width="100%"><polygon fill="#5fde96" points="0 34.5 0 11.833333333333336 3.851973684210526 26.944444444444443 7.703947368421052 4.277777777777779 11.555921052631579 19.38888888888889 15.407894736842104 23.166666666666668 19.25986842105263 4.277777777777779 23.111842105263158 30.72222222222222 26.96381578947368 23.166666666666668 30.81578947368421 11.833333333333336 34.66776315789473 15.61111111111111 38.51973684210526 0.5 42.37171052631579 26.944444444444443 46.223684210526315 4.277777777777779 50.07565789473684 30.72222222222222 53.92763157894736 19.38888888888889 57.77960526315789 4.277777777777779 61.63157894736842 0.5 65.48355263157895 4.277777777777779 69.33552631578947 26.944444444444443 73.1875 30.72222222222222 73.1875 34.5"></polygon><polyline fill="none" points="0 11.833333333333336 3.851973684210526 26.944444444444443 7.703947368421052 4.277777777777779 11.555921052631579 19.38888888888889 15.407894736842104 23.166666666666668 19.25986842105263 4.277777777777779 23.111842105263158 30.72222222222222 26.96381578947368 23.166666666666668 30.81578947368421 11.833333333333336 34.66776315789473 15.61111111111111 38.51973684210526 0.5 42.37171052631579 26.944444444444443 46.223684210526315 4.277777777777779 50.07565789473684 30.72222222222222 53.92763157894736 19.38888888888889 57.77960526315789 4.277777777777779 61.63157894736842 0.5 65.48355263157895 4.277777777777779 69.33552631578947 26.944444444444443 73.1875 30.72222222222222" stroke="#5fde96" stroke-width="1" stroke-linecap="square"></polyline></svg></span>
													</div>
												</div>
											</div>
										</div>
										<div class="d-flex">
											<p class="fs-12 fw-normal d-flex align-items-center text-truncate">
												<span class="text-primary fs-12 d-flex align-items-center me-1">
												<i class="ti ti-arrow-wave-right-up me-1"></i>+19.01%</span>from
												last week
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-md-6 d-flex">
								<div class="card flex-fill">
									<div class="card-body ">
										<div class="border-bottom pb-3 mb-3">
											<div class="row align-items-center">
												<div class="col-7">
													<div>
														<span class="fs-14 fw-normal text-truncate mb-1">Filter by Grade</span>
														<h5>40</h5>
													</div>
												</div>
												<div class="col-5">
													<div>
														<span class="subscription-line-4" data-width="100%"><svg class="peity" height="35" width="100%"><polygon fill="red" points="0 34.5 0 11.833333333333336 3.851973684210526 26.944444444444443 7.703947368421052 4.277777777777779 11.555921052631579 19.38888888888889 15.407894736842104 23.166666666666668 19.25986842105263 4.277777777777779 23.111842105263158 30.72222222222222 26.96381578947368 23.166666666666668 30.81578947368421 11.833333333333336 34.66776315789473 15.61111111111111 38.51973684210526 0.5 42.37171052631579 26.944444444444443 46.223684210526315 4.277777777777779 50.07565789473684 30.72222222222222 53.92763157894736 19.38888888888889 57.77960526315789 4.277777777777779 61.63157894736842 0.5 65.48355263157895 4.277777777777779 69.33552631578947 26.944444444444443 73.1875 30.72222222222222 73.1875 34.5"></polygon><polyline fill="none" points="0 11.833333333333336 3.851973684210526 26.944444444444443 7.703947368421052 4.277777777777779 11.555921052631579 19.38888888888889 15.407894736842104 23.166666666666668 19.25986842105263 4.277777777777779 23.111842105263158 30.72222222222222 26.96381578947368 23.166666666666668 30.81578947368421 11.833333333333336 34.66776315789473 15.61111111111111 38.51973684210526 0.5 42.37171052631579 26.944444444444443 46.223684210526315 4.277777777777779 50.07565789473684 30.72222222222222 53.92763157894736 19.38888888888889 57.77960526315789 4.277777777777779 61.63157894736842 0.5 65.48355263157895 4.277777777777779 69.33552631578947 26.944444444444443 73.1875 30.72222222222222" stroke="#F7A37A" stroke-width="1" stroke-linecap="square"></polyline></svg></span>
													</div>
												</div>
											</div>
										</div>
										<div class="d-flex">
											<p class="fs-12 fw-normal d-flex align-items-center text-truncate">
												<span class="text-primary fs-12 d-flex align-items-center me-1">
												<i class="ti ti-arrow-wave-right-up me-1"></i>+19.01%</span>from
												last week
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="card ">
							<div class="card-header">
								{/* <!-- Search --> */}
								<div class="row align-items-center">
									<div class="col-sm-4">
										<div class="icon-form mb-3 mb-sm-0">
											<span class="form-icon"><i class="ti ti-search"></i></span>
											<input type="text" class="form-control" placeholder="Search"/>
										</div>
									</div>
								  <div class="col-sm-8">
										<div
											class="d-flex align-items-center flex-wrap row-gap-2 justify-content-sm-end">
											<div class="dropdown me-2">
												<a href="javascript:void(0);" class="dropdown-toggle"
													data-bs-toggle="dropdown"><i
														class="ti ti-package-export me-2"></i>Export</a>
												<div class="dropdown-menu  dropdown-menu-end">
													<ul>
														<li>
															<a href="javascript:void(0);" class="dropdown-item"><i
																	class="ti ti-file-type-pdf text-danger me-1"></i>Export
																as PDF</a>
														</li>
														<li>
															<a href="javascript:void(0);" class="dropdown-item"><i
																	class="ti ti-file-type-xls text-green me-1"></i>Export
																as Excel </a>
														</li>
													</ul>
												</div>
											</div>
											<a href="javascript:void(0);" class="btn btn-primary"
												data-bs-toggle="offcanvas" data-bs-target="#offcanvas_add"><i
													class="ti ti-square-rounded-plus me-2"></i>Add Lead</a>
										</div>
									</div>
                  
								</div>
								{/* <!-- /Search --> */}
							</div>
							<div class="card-body">
								{/* <!-- Filter --> */}
								<div class="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-4">
									<div class="d-flex align-items-center flex-wrap row-gap-2">
										<div class="dropdown me-2">
											<a href="javascript:void(0);" class="dropdown-toggle"
												data-bs-toggle="dropdown"><i
													class="ti ti-sort-ascending-2 me-2"></i>Select Social Media</a>
											<div class="dropdown-menu  dropdown-menu-start">
												<ul>
													<li>
														<a href="javascript:void(0);" class="dropdown-item">
															<SiInstagram/> Instagram
														</a>
													</li>
													<li>
														<a href="javascript:void(0);" class="dropdown-item">
															<FaFacebookSquare/> Facebook
														</a>
													</li>
													<li>
														<a href="javascript:void(0);" class="dropdown-item">
															<FaTwitter/> Twitter
															
														</a>
													</li>
													<li>
														<a href="javascript:void(0);" class="dropdown-item">
															<AiOutlineGlobal/> Website
													
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div class="icon-form">
											<span class="form-icon"><i class="ti ti-calendar"></i></span>
											<input type="text" class="form-control bookingrange" placeholder=""/>
										</div>
									</div>
									<div class="d-flex align-items-center flex-wrap row-gap-2">
										<div class="dropdown me-2">
											<a href="javascript:void(0);" class="btn bg-soft-purple text-purple"
												data-bs-toggle="dropdown" data-bs-auto-close="outside"><i
													class="ti ti-columns-3 me-2"></i>Social Media Satuts</a>
											<div class="dropdown-menu  dropdown-menu-md-end dropdown-md p-3">
												<div class="border-top pt-3">
													<div class="d-flex align-items-center justify-content-between mb-3">
														<p class="mb-0 d-flex align-items-center"><i
																class="ti ti-grip-vertical me-2"></i>Instagram<span>23</span></p>
													</div>
													<div class="d-flex align-items-center justify-content-between mb-3">
														<p class="mb-0 d-flex align-items-center"><i
																class="ti ti-grip-vertical me-2"></i>Facebook<span>34</span></p>
													</div>
													
												</div>
											</div>
										</div>
									
									</div>
								</div>
								{/* <!-- /Filter --> */}

								<div class="row align-items-center">
									<div class="col-md-12">
										<div class="datatable-length">
                   
						<div class="card">
							<div class="card-header justify-content-between">
								<div class="card-title">
									Facebooks Leads
								</div>

							</div>
							<div class="card-body">
								<div class="table-responsive">
									<table class="table text-nowrap">
										<thead class="table-primary">
											<tr>
												<th scope="col">Lead</th>
												<th scope="col">Contact</th>
												<th scope="col">Status</th>
												<th scope="col">Date</th>
                        <th scope="col">Actions</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope="row">Harshrath</th>
												<td>9908765437</td>
												<td><span class="badge bg-soft-success">Accept</span></td>
                        <td>23-4-2025</td>
												<td>
													<div class="hstack gap-2 fs-15">
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-success rounded-pill">
                                <FaPhone />
                              </a>
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-info rounded-pill"><i
																class="feather-edit"></i></a>
														<a href="javascript:void(0);"
															class="btn btn-icon btn-sm btn-soft-danger rounded-pill"><i
																class="feather-trash"></i></a>
													</div>
												</td>
											</tr>
										
										</tbody>
									</table>
								</div>
							</div>

						</div>
				
                    </div>
									</div>
									<div class="col-md-6">
										<div class="datatable-paginate"></div>
									</div>
								</div>
								{/* <!-- /Contact List --> */}

							</div>
						</div>

					</div>
				</div>

			</div>
		</div>
    </div>
  )
}

export default LeadManagement
