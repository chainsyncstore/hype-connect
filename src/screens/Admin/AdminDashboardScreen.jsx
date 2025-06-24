import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import WebHeader from '../../components/WebHeader';

const AdminDashboardScreen = () => {
  const router = useRouter();
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
      ],
    );
  };

  const renderStatCard = (title, value, color = 'text-accent') => (
    <View className="bg-[#2A2A2A] rounded-xl p-5 w-[48%] mb-4 items-center">
      <Text className="text-[#c0b29b] text-sm mb-2 text-center">{title}</Text>
      <Text className={`text-2xl font-bold ${color}`}>{value}</Text>
    </View>
  );

  const renderReportItem = ({ item }) => (
    <View className="bg-[#2A2A2A] rounded-xl p-5 mb-4">
      <View className="flex-row justify-between items-center mb-2">
        <Text className="bg-accent text-primary px-2 py-1 rounded-md text-xs font-bold">
          {item.type.toUpperCase()}
        </Text>
        <Text className="text-[#c0b29b] text-xs">{item.date}</Text>
      </View>
      <Text className="text-white text-base mb-2">{item.content}</Text>
      <View className="mb-4">
        <Text className="text-[#c0b29b] text-sm mb-1">
          Reporter: {item.reporter} | Reported: {item.reported}
        </Text>
        <Text className="text-[#FF4444] text-sm">Reason: {item.reason}</Text>
      </View>
      <View className="flex-row justify-between">
        <TouchableOpacity
          className="flex-1 py-2.5 rounded-md items-center mx-1 bg-[#4CAF50]"
          onPress={() => handleReportAction(item.id, 'approve')}
        >
          <Text className="text-white font-bold">Take Action</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-1 py-2.5 rounded-md items-center mx-1 bg-[#666]"
          onPress={() => handleReportAction(item.id, 'dismiss')}
        >
          <Text className="text-white font-bold">Dismiss</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderActivityItem = ({ item }) => (
    <View className="bg-[#2A2A2A] rounded-md p-4 mb-2.5">
      <Text className="text-white text-base mb-1">{item.action}</Text>
      <Text className="text-accent text-sm mb-1">{item.user}</Text>
      <Text className="text-[#c0b29b] text-xs">{item.timestamp}</Text>
    </View>
  );

  const renderOverview = () => (
    <ScrollView className="flex-1 px-5">
      <View className="flex-row flex-wrap justify-between mb-8">
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
          'text-[#4CAF50]'
        )}
        {renderStatCard(
          'Pending Reports',
          dashboardData.pendingReports.toString(),
          'text-[#FF4444]'
        )}
      </View>

      <View className="mb-5">
        <Text className="text-white text-lg font-bold mb-4">Recent Activity</Text>
        <FlatList
          data={recentActivity}
          renderItem={renderActivityItem}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );

  const renderReports = () => (
    <View className="flex-1 px-5">
      <FlatList
        data={reportedContent}
        renderItem={renderReportItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );

  return (
    <View className="flex-1 bg-[#1B1B1E]">
      <WebHeader />
      <View className="flex-row justify-between items-center px-5 pt-12 pb-5">
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-white text-2xl">←</Text>
        </TouchableOpacity>
        <Text className="text-white text-lg font-bold">Admin Dashboard</Text>
        <View className="w-6" />
      </View>

      <View className="flex-row bg-[#2A2A2A] mx-5 rounded-full p-1.5 mb-5">
        <TouchableOpacity
          className={`flex-1 py-3 items-center rounded-full ${activeTab === 'overview' ? 'bg-accent' : ''}`}
          onPress={() => setActiveTab('overview')}
        >
          <Text
            className={`font-bold ${activeTab === 'overview' ? 'text-primary' : 'text-[#c0b29b]'}`}
          >
            Overview
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-1 py-3 items-center rounded-full ${activeTab === 'reports' ? 'bg-accent' : ''}`}
          onPress={() => setActiveTab('reports')}
        >
          <Text
            className={`font-bold ${activeTab === 'reports' ? 'text-primary' : 'text-[#c0b29b]'}`}
          >
            Reports ({dashboardData.pendingReports})
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'overview' ? renderOverview() : renderReports()}
    </View>
  );
};

export default AdminDashboardScreen;
