import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Switch, ViewStyle, TextStyle } from 'react-native';

// Define types for lightStyle and darkStyle
type StyleObject = ViewStyle | TextStyle;

const Dashboard = () => {
  // Dummy data for activities, stats, alerts, and tasks
  const activities = [
    { text: 'Logged in as Admin', time: '2 hours ago' },
    { text: 'Scanned network vulnerabilities', time: '3 hours ago' },
    // Add more activity items as needed
  ];

  const stats = [
    { label: 'Total Attacks', value: '23' },
    { label: 'Successful Intrusions', value: '12' },
    // Add more stat items as needed
  ];

  const alerts = [
    { text: 'System breach detected', time: '1 hour ago' },
    { text: 'Unusual activity detected', time: '2 hours ago' },
    // Add more alert items as needed
  ];

  const tasks = [
    { text: 'Review security protocols', status: 'In progress' },
    { text: 'Penetration testing', status: 'Pending' },
    // Add more task items as needed
  ];

  // State for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Helper function to get dynamic styles based on dark mode
  const getDynamicStyle = (lightStyle: StyleObject, darkStyle: StyleObject): StyleObject => {
    return isDarkMode ? darkStyle : lightStyle;
  };

  // Function to render activity items
  const renderActivityItems = () => {
    return activities.map((activity, index) => (
      <View key={index} style={[styles.activityItem, getDynamicStyle({}, { backgroundColor: '#333' })]}>
        <Text style={[styles.activityText, getDynamicStyle({}, { color: '#fff' })]}>{activity.text}</Text>
        <Text style={[styles.activityTime, getDynamicStyle({}, { color: '#ccc' })]}>{activity.time}</Text>
      </View>
    ));
  };

  // Function to render stat items
  const renderStatItems = () => {
    return stats.map((stat, index) => (
      <View key={index} style={[styles.statItem, getDynamicStyle({}, { backgroundColor: '#333' })]}>
        <Text style={[styles.statLabel, getDynamicStyle({}, { color: '#fff' })]}>{stat.label}</Text>
        <Text style={[styles.statValue, getDynamicStyle({}, { color: '#ccc' })]}>{stat.value}</Text>
      </View>
    ));
  };

  // Function to render alert items
  const renderAlertItems = () => {
    return alerts.map((alert, index) => (
      <View key={index} style={[styles.alertItem, getDynamicStyle({}, { backgroundColor: '#333' })]}>
        <Text style={[styles.alertText, getDynamicStyle({}, { color: '#fff' })]}>{alert.text}</Text>
        <Text style={[styles.alertTime, getDynamicStyle({}, { color: '#ccc' })]}>{alert.time}</Text>
      </View>
    ));
  };

  // Function to render task items
  const renderTaskItems = () => {
    return tasks.map((task, index) => (
      <View key={index} style={[styles.taskItem, getDynamicStyle({}, { backgroundColor: '#333' })]}>
        <Text style={[styles.taskText, getDynamicStyle({}, { color: '#fff' })]}>{task.text}</Text>
        <Text style={[styles.taskStatus, getDynamicStyle({}, { color: '#ff9800' })]}>{task.status}</Text>
      </View>
    ));
  };

  return (
    <SafeAreaView style={[styles.safeArea, getDynamicStyle({ backgroundColor: '#f0f0f0' }, { backgroundColor: '#333' })]}>
      <View style={styles.header}>
        <Text style={[styles.headerText, getDynamicStyle({}, { color: '#fff' })]}>Hacking Group Dashboard</Text>
        <Switch
          trackColor={{ false: '#ccc', true: '#ccc' }}
          thumbColor={isDarkMode ? '#4287f5' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkMode}
          value={isDarkMode}
          style={{ marginLeft: 10 }}
        />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={[styles.section, getDynamicStyle({}, { backgroundColor: '#333', borderColor: '#444' })]}>
          <Text style={[styles.sectionTitle, getDynamicStyle({}, { color: '#fff' })]}>Recent Activities</Text>
          {renderActivityItems()}
        </View>
        <View style={[styles.section, getDynamicStyle({}, { backgroundColor: '#333', borderColor: '#444' })]}>
          <Text style={[styles.sectionTitle, getDynamicStyle({}, { color: '#fff' })]}>Important Stats</Text>
          {renderStatItems()}
        </View>
        <View style={[styles.section, getDynamicStyle({}, { backgroundColor: '#333', borderColor: '#444' })]}>
          <Text style={[styles.sectionTitle, getDynamicStyle({}, { color: '#fff' })]}>Latest Alerts</Text>
          {renderAlertItems()}
        </View>
        <View style={[styles.section, getDynamicStyle({}, { backgroundColor: '#333', borderColor: '#444' })]}>
          <Text style={[styles.sectionTitle, getDynamicStyle({}, { color: '#fff' })]}>Task Overview</Text>
          {renderTaskItems()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4287f5',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  activityItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  activityText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  activityTime: {
    fontSize: 12,
    color: '#888',
  },
  statItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  statLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  statValue: {
    fontSize: 16,
    color: '#333',
  },
  alertItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  alertText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  alertTime: {
    fontSize: 12,
    color: '#888',
  },
  taskItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  taskText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  taskStatus: {
    fontSize: 14,
    color: '#333',
  },
});

export default Dashboard;
