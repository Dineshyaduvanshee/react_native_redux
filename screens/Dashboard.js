import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

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

  const renderActivityItems = () => {
    return activities.map((activity, index) => (
      <View key={index} style={styles.activityItem}>
        <Text style={styles.activityText}>{activity.text}</Text>
        <Text style={styles.activityTime}>{activity.time}</Text>
      </View>
    ));
  };

  const renderStatItems = () => {
    return stats.map((stat, index) => (
      <View key={index} style={styles.statItem}>
        <Text style={styles.statLabel}>{stat.label}</Text>
        <Text style={styles.statValue}>{stat.value}</Text>
      </View>
    ));
  };

  const renderAlertItems = () => {
    return alerts.map((alert, index) => (
      <View key={index} style={styles.alertItem}>
        <Text style={styles.alertText}>{alert.text}</Text>
        <Text style={styles.alertTime}>{alert.time}</Text>
      </View>
    ));
  };

  const renderTaskItems = () => {
    return tasks.map((task, index) => (
      <View key={index} style={styles.taskItem}>
        <Text style={styles.taskText}>{task.text}</Text>
        <Text style={styles.taskStatus}>{task.status}</Text>
      </View>
    ));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hacking Group Dashboard</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activities</Text>
          {renderActivityItems()}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Important Stats</Text>
          {renderStatItems()}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Latest Alerts</Text>
          {renderAlertItems()}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Task Overview</Text>
          {renderTaskItems()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4287f5',
    paddingVertical: 15,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  activityText: {
    fontSize: 16,
    color: '#333',
  },
  activityTime: {
    fontSize: 14,
    color: '#666',
  },
  statItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  statLabel: {
    fontSize: 16,
    color: '#333',
  },
  statValue: {
    fontSize: 16,
    color: '#009688',
  },
  alertItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  alertText: {
    fontSize: 16,
    color: '#333',
  },
  alertTime: {
    fontSize: 14,
    color: '#666',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
  taskStatus: {
    fontSize: 16,
    color: '#ff9800',
    fontWeight: 'bold',
  },
});

export default Dashboard;
