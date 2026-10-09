import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { moodStyles } from '../styles/moods';

export default function DiaryCard({ title, date, preview, mood, moodUri }) {
  const theme = moodStyles[mood] || moodStyles.tenang;

  // string = URL remote, selain itu = gambar lokal hasil import
  const imageSource = typeof moodUri === 'string' ? { uri: moodUri } : moodUri;

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: theme.bg, borderColor: theme.color },
      ]}
    >
      <View style={[styles.accent, { backgroundColor: theme.color }]} />
      <Image
        source={imageSource}
        style={[styles.mood, { borderColor: theme.color }]}
      />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <View style={styles.metaRow}>
          <Text style={styles.date}>{date}</Text>
          <Text style={[styles.moodLabel, { color: theme.color }]}>
            {theme.label}
          </Text>
        </View>
        <Text style={styles.preview} numberOfLines={2} ellipsizeMode="tail">
          {preview}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 8,
    paddingRight: 10,
    paddingLeft: 16,
    borderWidth: 1.5,
    borderRadius: 14,
    marginBottom: 8,
    overflow: 'hidden',
  },
  accent: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 6,
  },
  mood: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '800',
    color: '#3B2A57',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  date: {
    fontSize: 11,
    color: '#8A7BA8',
  },
  moodLabel: {
    fontSize: 11,
    fontWeight: '700',
  },
  preview: {
    fontSize: 12,
    lineHeight: 16,
    color: '#4A3D63',
  },
});