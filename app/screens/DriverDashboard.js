import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DriverDashboard = () => {
  const passengerCount = 3; 
  const location = { latitude: 37.78825, longitude: -122.4324 }; 
  const suggestedRoute = [ 
    { latitude: 37.78825, longitude: -122.4324, id: 'point1' }, // Add unique IDs 
    { latitude: 37.7749, longitude: -122.4194, id: 'point2' }, 
    { latitude: 37.7619, longitude: -122.3882, id: 'point3' } 
  ];
  const earnings = 45.80; 

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Driver Dashboard</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Passengers: {passengerCount}</Text>
        <Text style={styles.infoText}>
          Location: {location.latitude}, {location.longitude}
        </Text>
        
        <Text style={styles.infoText}>Suggested Route:</Text> 
        {suggestedRoute.map((coord) => (
          <Text key={coord.id}> {/* Use the unique id from the coord object */}
            {coord.latitude}, {coord.longitude} 
          </Text>
        ))} 

        <Text style={styles.infoText}>Earnings: ${earnings.toFixed(2)}</Text>
      </View> 
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
  infoContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default DriverDashboard;