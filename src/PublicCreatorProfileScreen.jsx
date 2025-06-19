import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const PublicCreatorProfileScreen = () => {
  console.log('PublicCreatorProfileScreen rendered');

  useEffect(() => {
    console.log('PublicCreatorProfileScreen mounted');

    return () => {
      console.log('PublicCreatorProfileScreen unmounted');
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Image
            source={{ uri: 'https://via.placeholder.com/24' }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <View style={styles.flex} />
        <TouchableOpacity style={styles.shareButton}>
          <Image
            source={{ uri: 'https://via.placeholder.com/24' }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.profileSection}>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUsD4PV-NWVkwPYLn09JGAUVY_qh6_Cf88fW63-yK_4QsqCPo1T6b2qD3X3vp7x9Zb5s9BVHb_uzo9vtLk0htm-tNV7314rrKkH34YaMPziRnqgwHo4l0hWhbemB-9Huimbkx5XaokEynCNdoCSXrUFMtkBIbqsVxPCgHb8VmGfiWao2q13_21nx3Wjo3eC8V8HYaSvi6pcNfV_ELSzy1YV_ZuqdCAzSPL4YsPnN_XKQbs2A1G8KjwGDWgtonn4sTEw6wrMJRwaXE',
            }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Ethan Carter</Text>
            <Text style={styles.username}>@ethan_carter</Text>
            <Text style={styles.bio}>Producer | Photographer</Text>
          </View>
        </View>

        <View style={styles.tagsContainer}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>🎧 Producer</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>📸 Photographer</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>🎵 Songwriter</Text>
          </View>
        </View>

        <Text style={styles.description}>
          Ethan Carter is a multi-talented creative based in Los Angeles,
          specializing in music production, photography, and songwriting.
        </Text>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>1.2K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>50</Text>
            <Text style={styles.statLabel}>Gigs Completed</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>4.8</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tipButton}>
            <Text style={styles.tipButtonText}>Tip</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>

        <Text style={styles.featuredWorkTitle}>Featured Work</Text>

        <ScrollView
          horizontal
          style={styles.featuredWorkScroll}
          contentContainerStyle={styles.featuredWorkContent}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.featuredWorkItem}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9WgC1XjhUEcY2fu9JhjWR9vjlduSQUiTAcDA-GJAm4aaqg6uHxyr9FBzdA2XkzwJYvRIdBWcPMJU7as-FjixGlWFVuwDOvTaQn7Inf59P9tvGJrQp9nkF9SxUwqS3dgkL-PQwcSVOqKgxPkWpFhxK1DdB0C7_okNo7k7E88HfKn4EyBP4KRg-qTQ_yMkOW0WTuN_PJmGv2IJJJ0O71EpVIQrH44wrdWnUhI88TO7Cs_0BVcBVfIU9snJgMBYdRkrc5VSOdZumUxY',
              }}
              style={styles.featuredWorkImage}
            />
            <Text style={styles.featuredWorkText}>Album 1</Text>
          </View>
          <View style={styles.featuredWorkItem}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbzriAvMNzrmNkcfekgDBMCrWkBLiyIRcWCAlFR20VcH6gmuEJ5u-fpwbbLUTFtCzPxcUQPKkL2gT23_Epi5RbtIf4mddqQ16ETaMbDf5d7dyA1kqD3NwDEQT_3lfAuTl5GdPqgLLp7mpqFsmtE53cMK4miTvXVv9R0_xffB2nsbUEsMkjlgF87mUCfKe1U7aQ-LAlY2YicnRLulVBkGGEsG0bEBF-h1-JQmOWzOxe6Xph2ltGrkBNiCj_L15IE11xY6ZxOYVAlCI',
              }}
              style={styles.featuredWorkImage}
            />
            <Text style={styles.featuredWorkText}>Album 2</Text>
          </View>
          <View style={styles.featuredWorkItem}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEf4n4EMXchDiO87Mgek94vF5928u1_6mbFh7egxCsO3507p68oeShd4_tgUtXuii_QdPMw4qD9LpSpzwpdvm0oyn2EYsUky-Q9G1UQTpQL9B-_aJCX1sLjNTToabRWncxyy_eze_umnqRLdaRc7AmOo3NknMNFcO8KyNUqdAQt5M-wuD57k-plOEIN9QYbr2oKkIe1VPfGTgyvLIDw63BiuIphgZpUJA8K4FRNET18mXVz4yMGWmGaS_QPxfZMIZSS60vDkPN7dQ',
              }}
              style={styles.featuredWorkImage}
            />
            <Text style={styles.featuredWorkText}>Album 3</Text>
          </View>
        </ScrollView>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{
              uri: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDI1NiAyNTYiPgogICAgPHBhdGggZD0iTTIyNCwxMTUuNTVWMjA4YTE2LDE2LDAsMCwxLTE2LDE2SDE2OGExNiwxNiwwLDAsMS0xNi0xNlYxNjhhOCw4LDAsMCwwLTgtOEgxMTJhOCw4LDAsMCwwLTgsOHY0MGExNiwxNiwwLDAsMS0xNiwxNkg0OGExNiwxNiwwLDAsMS0xNi0xNlYxMTUuNTVhMTYsMTYsMCwwLDEsNS4xNy0xMS43OGw4MC03NS40OC4xMS0uMTFhMTYsMTYsMCwwLDEsMjEuNTMsMCwxLjE0LDEuMTQsMCwwLDAsLjExLjExbDgwLDc1LjQ4QTE2LDE2LDAsMCwxLDIyNCwxMTUuNTVaIj48L3BhdGg+Cjwvc3ZnPg==',
            }}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{
              uri: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDI1NiAyNTYiPgogICAgPHBhdGggZD0iTTIyOS42NiwyMTguMzRsLTUwLjA3LTUwLjA2YTg4LjExLDg4LjExLDAsMSwwLTExLjMxLDExLjMxbDUwLjA2LDUwLjA3YTgsOCwwLDAsMCwxMS4zMi0xMS4zMlptNDAsMTEyYTcyLDcyLDAsMSwxLDcyLDcyQTcyLjA4LDcyLjA4LDAsMCwxLDQwLDExMloiPjwvcGF0aD4KPC9zdmc+',
            }}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{
              uri: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDI1NiAyNTYiPgogICAgPHBhdGggZD0iTTIyNCwxMjhhOCw4LDAsMCwxLTgsOEgxMzZ2ODBhOCw4LDAsMCwxLTE2LDBWMTM2SDRhOCw4LDAsMCwxLDAtMTZoODBWMDRhOCw4LDAsMCwxLDE2LDB2ODBIMjE2QTgsOCwwLDAsMSwyMjQsMTI4WiI+PC9wYXRoPgogIDwvc3ZnPg==',
            }}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{
              uri: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDI1NiAyNTYiPgogICAgPHBhdGggZD0iTTE0MCwxMjhhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTQwLDEyOFpNODQsMTE2YTEyLDEyLDAsMSwwLDEyLDEyQTEyLDEyLDAsMCwwLDE3MiwxMTZaTTIzMiwxMjhBMTExLjE0LDExMS4xNCwwLDAsMSw3OS4xMiwyMTkuODJMNDUuMDcsMjMxLjE3YTE2LDE2LDAsMCwxLTIwLjI0LTIwLjI0bDExLjM1LTM0LjA1QTExMS4xNCwxMTEuMTQsMCwxLDEsMjMyLDEyOFptLTE2LDBBODgsODgsMCwxLDAsNTEuODEsMTcyLjA2YTgsOCwwLDAsMSwuNjYsNi41NEw0MCwyMTYsNzcuNDAyMDMuNTNhNy44NSw3Ljg1LDAsMCwxLDIuNTMtLjQyLDgsOCwwLDAsMSw0LDEuMDhBODgsODgsMCwwLDAsMjE2LDEyOFoiPjwvcGF0aD4KPC9zdmc+',
            }}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{
              uri: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDI1NiAyNTYiPgogICAgPHBhdGggZD0iTTIzMC45MiwyMTJjLTE1LjIzLTI2LjMzLTM4LjctNDUuMjEtNjYuMDktNTQuMTZhNzIsNzIsMCwxLDAtNzMuNjYsMEM2My43OCwxNjYuNzgsNDAuMzEsMTg1LjY2LDI1LjA4LDIxMmE4LDgsMCwxLDAsMTMuODUsOGMxOC44NC0zMi41Niw1Mi4xNC01Miw4OS4wNy01MnM3MC4yMywxOS40NCw4OS4wNyw1MmE4LDgsMCwxLDAsMTMuODUtOFpNNzIsOTZhNTYsNTYsMCwxLDEsNTYsNTZBNTYuMDYsNTYuMDYsMCwwLDEsNzIsOTZaIj48L3BhdGg+Cjwvc3ZnPg==',
            }}
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1b14',
    fontFamily: 'Spline Sans, Noto Sans, sans-serif',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f1b14',
    paddingHorizontal: 16,
    paddingBottom: 8,
    paddingTop: 20,
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 8,
  },
  shareButton: {
    padding: 8,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
  flex: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    padding: 16,
  },
  profileSection: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 64,
    marginBottom: 8,
  },
  profileInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: -0.33,
    textAlign: 'center',
  },
  username: {
    color: '#c0b29b',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  bio: {
    color: '#c0b29b',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
    gap: 12,
  },
  tag: {
    backgroundColor: '#423929',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  tagText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  description: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'normal',
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 8,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    paddingBottom: 16,
    justifyContent: 'center',
  },
  statBox: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#5e513b',
    borderRadius: 8,
    minWidth: 111,
    flex: 1,
    marginHorizontal: 4,
  },
  statNumber: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: -0.48,
  },
  statLabel: {
    color: '#c0b29b',
    fontSize: 14,
    fontWeight: 'normal',
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
    justifyContent: 'center',
  },
  followButton: {
    backgroundColor: '#eedcbe',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    marginHorizontal: 8,
    flexGrow: 1,
  },
  followButtonText: {
    color: '#1f1b14',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.21,
  },
  tipButton: {
    backgroundColor: '#423929',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    marginHorizontal: 8,
    flexGrow: 1,
  },
  tipButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.21,
  },
  bookButton: {
    backgroundColor: '#eedcbe',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  bookButtonText: {
    color: '#1f1b14',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.21,
  },
  featuredWorkTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: -0.33,
    paddingHorizontal: 16,
    paddingBottom: 12,
    paddingTop: 20,
  },
  featuredWorkScroll: {
    paddingHorizontal: 16,
  },
  featuredWorkContent: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 12,
  },
  featuredWorkItem: {
    marginRight: 16,
  },
  featuredWorkImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
  },
  featuredWorkText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
  },
  albumContainer: {
    flexDirection: 'column',
    minWidth: 160,
  },
  albumImage: {
    width: 160,
    height: 160,
    borderRadius: 12,
    marginBottom: 8,
  },
  albumTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  albumArtist: {
    color: '#c0b29b',
    fontSize: 14,
    fontWeight: 'normal',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2f291d',
    borderTopWidth: 1,
    borderColor: '#423929',
    paddingVertical: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    tintColor: '#c0b29b',
  },
});

export default PublicCreatorProfileScreen;
