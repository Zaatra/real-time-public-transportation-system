import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyProfile = () => {
  const driverName = "John Doe"; // Placeholder
  const driverRating = 4.8; // Placeholder
  const driverVehicle = "Toyota Camry"; // Placeholder
  const contactNumber = "123-456-7890"; // Placeholder

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Profile</Text>
      <View style={styles.profileInfo}>
        <Text style={styles.infoLabel}>Name:</Text>
        <Text style={styles.infoValue}>{driverName}</Text>

        <Text style={styles.infoLabel}>Rating:</Text>
        <Text style={styles.infoValue}>{driverRating}</Text>

        <Text style={styles.infoLabel}>Vehicle:</Text>
        <Text style={styles.infoValue}>{driverVehicle}</Text>

        <Text style={styles.infoLabel}>Contact:</Text>
        <Text style={styles.infoValue}>{contactNumber}</Text>
      </View>
      {/* ... add more profile details as needed ... */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileInfo: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default MyProfile;