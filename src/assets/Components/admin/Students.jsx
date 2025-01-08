import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Modal,
  Grid,
  Card,
  CardContent,
  CardActions,
  Avatar,
  useTheme,
} from '@mui/material';
import { Save, Delete, Edit, Person as DefaultUserIcon } from '@mui/icons-material';

const Students = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const [search, setSearch] = useState('');
  const [openDetails, setOpenDetails] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false); // New state for Add Student modal
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [newStudent, setNewStudent] = useState({
    firstname: '',
    lastname: '',
    middlename: '',
    studentId: '',
    userImage: '',
  });

  const [students, setStudents] = useState([
    {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      middlename: 'M',
      studentId: 'S1234',
      userImage: '',
    },
    {
      id: 2,
      firstname: 'Jane',
      lastname: 'Smith',
      middlename: 'A',
      studentId: 'S5678',
      userImage: 'https://via.placeholder.com/40',
    },
    {
      id: 3,
      firstname: 'Mary',
      lastname: 'Johnson',
      middlename: 'B',
      studentId: 'S9101',
      userImage: '',
    },
  ]);

  const handleOpenDetails = (student) => {
    setSelectedStudent({ ...student });
    setOpenDetails(true);
  };

  const handleCloseDetails = () => {
    setOpenDetails(false);
    setSelectedStudent(null);
  };

  const handleOpenEdit = () => {
    setOpenDetails(false);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setOpenDetails(true);
  };

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
    setNewStudent({
      firstname: '',
      lastname: '',
      middlename: '',
      studentId: '',
      userImage: '',
    });
  };

  const handleInputChange = (field, value) => {
    setSelectedStudent((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNewInputChange = (field, value) => {
    setNewStudent((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveChanges = () => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === selectedStudent.id ? { ...selectedStudent } : student
      )
    );
    handleCloseEdit();
  };

  const handleSaveNewStudent = () => {
    const newStudentData = { ...newStudent, id: students.length + 1 };
    setStudents((prev) => [...prev, newStudentData]);
    handleCloseAdd();
  };

  const handleDeleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
    handleCloseDetails();
  };

  const filteredStudents = students.filter((student) =>
    [student.firstname, student.lastname, student.studentId]
      .join(' ')
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Box p={3}>
      {/* Search Bar with Add Student Button */}
      <Box mb={3}>
        <TextField
          fullWidth
          label="Search Students"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          margin="normal"
          sx={{
            backgroundColor: isDarkMode ? theme.palette.background.paper : 'white',
            color: isDarkMode ? theme.palette.text.primary : 'black',
            height: 60, // Increase height for search bar
          }}
        />
      </Box>

      {/* Add Student Button below the Search Bar */}
      <Box mb={3} ml={94}>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: 'auto' }} // Make the button take full width, if you want it
          onClick={handleOpenAdd}
        >
          Add Student
        </Button>
      </Box>

      {/* Student List */}
      <Grid container spacing={2}>
        {filteredStudents.map((student) => (
          <Grid item xs={12} sm={6} md={4} key={student.id}>
            <Card
              sx={{
                backgroundColor: isDarkMode
                  ? theme.palette.background.paper
                  : 'white',
                color: isDarkMode ? theme.palette.text.primary : 'black',
              }}
            >
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Avatar alt={`${student.firstname} ${student.lastname}`}>
                      {student.userImage ? (
                        <img
                          src={student.userImage}
                          alt={`${student.firstname} ${student.lastname}`}
                          style={{ width: '100%', height: '100%' }}
                        />
                      ) : (
                        <DefaultUserIcon />
                      )}
                    </Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6">{`${student.firstname} ${student.lastname}`}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  onClick={() => handleOpenDetails(student)}
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* View Details Modal */}
      <Modal open={openDetails} onClose={handleCloseDetails}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            backgroundColor: isDarkMode
              ? theme.palette.background.default
              : 'white',
            color: isDarkMode ? theme.palette.text.primary : 'black',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: 24,
          }}
        >
          {selectedStudent && (
            <Box>
              <Typography variant="h5" gutterBottom>
                Student Details
              </Typography>
              <Box mb={2} display="flex" alignItems="center">
                <Avatar
                  alt={`${selectedStudent.firstname} ${selectedStudent.lastname}`}
                  sx={{ width: 56, height: 56, marginRight: 2 }}
                >
                  {selectedStudent.userImage ? (
                    <img
                      src={selectedStudent.userImage}
                      alt={`${selectedStudent.firstname} ${selectedStudent.lastname}`}
                      style={{ width: '100%', height: '100%' }}
                    />
                  ) : (
                    <DefaultUserIcon />
                  )}
                </Avatar>
              </Box>
              <Typography variant="body1" gutterBottom>
                First Name: {selectedStudent.firstname}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Last Name: {selectedStudent.lastname}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Middle Name: {selectedStudent.middlename}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Student ID: {selectedStudent.studentId}
              </Typography>
              <Box mt={2} display="flex" justifyContent="space-between">
                <Button variant="contained" onClick={handleOpenEdit}>
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDeleteStudent(selectedStudent.id)}
                  startIcon={<Delete />}
                >
                  Delete
                </Button>
                <Button variant="contained" onClick={handleCloseDetails}>
                  Close
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Modal>

      {/* Edit Modal */}
      <Modal open={openEdit} onClose={handleCloseEdit}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            backgroundColor: isDarkMode
              ? theme.palette.background.default
              : 'white',
            color: isDarkMode ? theme.palette.text.primary : 'black',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: 24,
          }}
        >
          {selectedStudent && (
            <Box>
              <Typography variant="h5" gutterBottom>
                Edit Student
              </Typography>
              {['firstname', 'lastname', 'middlename', 'studentId'].map((field) => (
                <Box mb={2} key={field}>
                  <TextField
                    fullWidth
                    label={field.replace(/^\w/, (c) => c.toUpperCase())}
                    value={selectedStudent[field]}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                  />
                </Box>
              ))}
              <Box mt={2} display="flex" justifyContent="space-between">
                <Button variant="contained" onClick={handleSaveChanges}>
                  Save
                </Button>
                <Button variant="contained" onClick={handleCloseEdit}>
                  Cancel
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Modal>

      {/* Add New Student Modal */}
      <Modal open={openAdd} onClose={handleCloseAdd}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            backgroundColor: isDarkMode
              ? theme.palette.background.default
              : 'white',
            color: isDarkMode ? theme.palette.text.primary : 'black',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: 24,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Add New Student
          </Typography>
          {['firstname', 'lastname', 'middlename', 'studentId'].map((field) => (
            <Box mb={2} key={field}>
              <TextField
                fullWidth
                label={field.replace(/^\w/, (c) => c.toUpperCase())}
                value={newStudent[field]}
                onChange={(e) => handleNewInputChange(field, e.target.value)}
              />
            </Box>
          ))}
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button variant="contained" onClick={handleSaveNewStudent}>
              Save
            </Button>
            <Button variant="contained" onClick={handleCloseAdd}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Students;
