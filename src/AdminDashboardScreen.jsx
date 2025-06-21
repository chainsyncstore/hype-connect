import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

const AdminDashboardScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 0,
    activeGigs: 0,
    totalRevenue: 0,
    pendingReports: 0,
  });
  const [reportedContent, setReportedContent] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = () => {
    // Mock data for demo
    setDashboardData({
      totalUsers: 15420,
      activeGigs: 2840,
      totalRevenue: 45000000,
      pendingReports: 23,
    });

    setReportedContent([
      {
        id: 1,
        type: 'post',
        content: 'Inappropriate music content',
        reporter: 'User #1234',
        reported: 'Beat Master Pro',
        reason: 'Spam/Inappropriate',
        date: '2024-01-15',
        status: 'pending',
      },
      {
        id: 2,
        type: 'user',
        content: 'Fake profile with stolen photos',
        reporter: 'User #5678',
        reported: 'Fake Artist',
        reason: 'Impersonation',
        date: '2024-01-14',
        status: 'pending',
      },
    ]);

    setRecentActivity([
      {
        id: 1,
        action: 'New user registration',
        user: 'New Producer',
        timestamp: '5 min ago',
      },
      {
        id: 2,
        action: 'Gig completed',
        user: 'Beat Maker Pro → Artist X',
        timestamp: '15 min ago',
      },
      {
        id: 3,
        action: 'Payment processed',
        user: 'Visual Designer',
        timestamp: '1 hour ago',
      },
    ]);
  };

  const handleReportAction = (reportId, action) => {
    Alert.alert(
      'Confirm Action',
      `Are you sure you want to ${action} this report?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Confirm',
          onPress: () => {
            setReportedContent((prev) =>
              prev.map((report) =>
                report.id === reportId
                  ? {
                      ...report,
                      status: action === 'approve' ? 'resolved' : 'dismissed',
                    }
                  : report
              )
            );
            Alert.alert('Success', `Report ${action}d successfully`);
          },
        },
      ]
    );
  };

  const renderStatCard = (title, value, color = '#F5A623') => (
    <View style={styles.statCard}>
      <Text style={styles.statTitle}>{title}</Text>
      <Text style={[styles.statValue, { color }]}>{value}</Text>
    </View>
  );

  const renderReportItem = ({ item }) => (
    <View style={styles.reportItem}>
      <View style={styles.reportHeader}>
        <Text style={styles.reportType}>{item.type.toUpperCase()}</Text>
        <Text style={styles.reportDate}>{item.date}</Text>
      </View>
      <Text style={styles.reportContent}>{item.content}</Text>
      <View style={styles.reportDetails}>
        <Text style={styles.reportInfo}>
          Reporter: {item.reporter} | Reported: {item.reported}
        </Text>
        <Text style={styles.reportReason}>Reason: {item.reason}</Text>
      </View>
      <View style={styles.reportActions}>
        <TouchableOpacity
          style={[styles.actionButton, styles.approveButton]}
          onPress={() => handleReportAction(item.id, 'approve')}
        >
          <Text style={styles.actionButtonText}>Take Action</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.dismissButton]}
          onPress={() => handleReportAction(item.id, 'dismiss')}
        >
          <Text style={styles.actionButtonText}>Dismiss</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderActivityItem = ({ item }) => (
    <View style={styles.activityItem}>
      <Text style={styles.activityAction}>{item.action}</Text>
      <Text style={styles.activityUser}>{item.user}</Text>
      <Text style={styles.activityTime}>{item.timestamp}</Text>
    </View>
  );

  const renderOverview = () => (
    <ScrollView style={styles.tabContent}>
      <View style={styles.statsGrid}>
        {renderStatCard(
          'Total Users',
          dashboardData.totalUsers.toLocaleString()
        )}
        {renderStatCard(
          'Active Gigs',
          dashboardData.activeGigs.toLocaleString()
        )}
        {renderStatCard(
          'Total Revenue',
          `₦${dashboardData.totalRevenue.toLocaleString()}`,
          '#4CAF50'
        )}
        {renderStatCard(
          'Pending Reports',
          dashboardData.pendingReports.toString(),
          '#FF4444'
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <FlatList
          data={recentActivity}
          renderItem={renderActivityItem}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );

  const renderReports = () => (
    <View style={styles.tabContent}>
      <FlatList
        data={reportedContent}
        renderItem={renderReportItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Admin Dashboard</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'overview' && styles.activeTab]}
          onPress={() => setActiveTab('overview')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'overview' && styles.activeTabText,
            ]}
          >
            Overview
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'reports' && styles.activeTab]}
          onPress={() => setActiveTab('reports')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'reports' && styles.activeTabText,
            ]}
          >
            Reports ({dashboardData.pendingReports})
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'overview' ? renderOverview() : renderReports()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1E',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  backButton: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#2A2A2A',
    marginHorizontal: 20,
    borderRadius: 25,
    padding: 5,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#F5A623',
  },
  tabText: {
    color: '#c0b29b',
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#1B1B1E',
  },
  tabContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statCard: {
    backgroundColor: '#2A2A2A',
    borderRadius: 15,
    padding: 20,
    width: '48%',
    marginBottom: 15,
    alignItems: 'center',
  },
  statTitle: {
    fontSize: 14,
    color: '#c0b29b',
    marginBottom: 8,
    textAlign: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  activityItem: {
    backgroundColor: '#2A2A2A',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  activityAction: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 3,
  },
  activityUser: {
    fontSize: 14,
    color: '#F5A623',
    marginBottom: 3,
  },
  activityTime: {
    fontSize: 12,
    color: '#c0b29b',
  },
  reportItem: {
    backgroundColor: '#2A2A2A',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
  },
  reportHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  reportType: {
    backgroundColor: '#F5A623',
    color: '#1B1B1E',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: 'bold',
  },
  reportDate: {
    fontSize: 12,
    color: '#c0b29b',
  },
  reportContent: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  reportDetails: {
    marginBottom: 15,
  },
  reportInfo: {
    fontSize: 14,
    color: '#c0b29b',
    marginBottom: 3,
  },
  reportReason: {
    fontSize: 14,
    color: '#FF4444',
  },
  reportActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  approveButton: {
    backgroundColor: '#4CAF50',
  },
  dismissButton: {
    backgroundColor: '#666',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default AdminDashboardScreen;
