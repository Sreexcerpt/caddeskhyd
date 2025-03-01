


import { useState } from "react";
import { Box, Button, Select, MenuItem, Typography, Grid, Card, CardContent } from "@mui/material";

// Updated Indian names for counselors
const counselors = [
  { id: 1, name: "Amit Sharma" },
  { id: 2, name: "Priya Verma" },
  { id: 3, name: "Rajesh Kumar" },
];

// Updated Indian names for leads
const initialLeads = [
  { id: 1, name: "Rohan Mehta", status: "New", counselor: null },
  { id: 2, name: "Neha Patil", status: "In Progress", counselor: 1 },
  { id: 3, name: "Aarav Singh", status: "Converted", counselor: 2 },
  { id: 4, name: "Sanya Iyer", status: "Dropped", counselor: 3 },
  { id: 5, name: "Vikram Chauhan", status: "New", counselor: null },
  { id: 6, name: "Meera Joshi", status: "In Progress", counselor: 2 },
  { id: 7, name: "Kabir Nair", status: "Converted", counselor: 3 },
  { id: 8, name: "Sneha Kapoor", status: "Dropped", counselor: 1 },
  { id: 9, name: "Aisha Khan", status: "New", counselor: null },
  { id: 10, name: "Karan Malhotra", status: "In Progress", counselor: 2 },
];

function LeadAssignment() {
  const [leads, setLeads] = useState(initialLeads);
  const [selectedCounselor, setSelectedCounselor] = useState("");

  const assignLead = (leadId) => {
    setLeads(
      leads.map((lead) =>
        lead.id === leadId ? { ...lead, counselor: selectedCounselor } : lead
      )
    );
  };

  return (
    <Box p={3} maxWidth={900} mx="auto" marginLeft={40}>
      <Typography variant="h4" textAlign="center" gutterBottom fontWeight="bold" color="primary">
        🎯 Lead Assignment & Follow-ups
      </Typography>

      <Grid container spacing={3}>
        {counselors.map((counselor) => (
          <Grid item xs={12} sm={6} md={4} key={counselor.id}>
            <Card elevation={4} sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" color="secondary">
                  {counselor.name}
                </Typography>
                <Box mt={2}>
                  {leads
                    .filter((lead) => lead.counselor === counselor.id)
                    .map((lead) => (
                      <Box
                        key={lead.id}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        p={1}
                        bgcolor="#e3f2fd"
                        my={1}
                        borderRadius={1}
                      >
                        <Typography>{lead.name}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          {lead.status}
                        </Typography>
                      </Box>
                    ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Unassigned Leads */}
      <Typography variant="h5" mt={4} textAlign="center" fontWeight="bold" color="primary">
        Unassigned Leads
      </Typography>
      <Box mt={2} p={2} bgcolor="#f3f3f3" borderRadius={3}>
        {leads.filter((lead) => !lead.counselor).map((lead) => (
          <Box
            key={lead.id}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            my={1}
            p={2}
            bgcolor="#ffffff"
            borderRadius={2}
            boxShadow={1}
          >
            <Typography fontWeight="bold">{lead.name}</Typography>
            <Select
              value={selectedCounselor}
              onChange={(e) => setSelectedCounselor(e.target.value)}
              size="small"
            >
              <MenuItem value="">Select Counselor</MenuItem>
              {counselors.map((counselor) => (
                <MenuItem key={counselor.id} value={counselor.id}>
                  {counselor.name}
                </MenuItem>
              ))}
            </Select>
            <Button variant="contained" color="primary" onClick={() => assignLead(lead.id)}>
              Assign
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default LeadAssignment;

