import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import DiaryCard from '../components/DiaryCard';

import gambar1 from '../../assets/moods/1.jpeg';
import gambar2 from '../../assets/moods/2.jpeg';
import gambar3 from '../../assets/moods/3.jpeg';
import gambar4 from '../../assets/moods/4.jpeg';
import gambar5 from '../../assets/moods/5.jpeg';
import fotoProfil from '../../assets/moods/WhatsApp Image 2026-10-09 at 14.41.17.jpeg';

const NAMA_PENGGUNA = 'Diana Anis Fardah';

// moodUri: string = gambar remote, import = gambar lokal
const diaryEntries = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2026-10-06',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    mood: 'senang',
    moodUri: gambar1,
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2026-10-05',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    mood: 'fokus',
    moodUri: gambar2,
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2026-10-04',
    preview: 'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    mood: 'tenang',
    moodUri: gambar3,
  },
  {
    id: 4,
    title: 'Deadline Menumpuk',
    date: '2026-10-07',
    preview: 'Tugas datang bertubi-tubi dan koneksi internet putus-putus. Sempat kesal, tapi akhirnya dicicil satu per satu...',
    mood: 'sedih',
    moodUri: gambar4,
  },
  {
    id: 5,
    title: 'Aplikasi Pertama Jalan!',
    date: '2026-10-08',
    preview: 'Akhirnya Diary App tampil di Expo Go setelah berjam-jam debugging. Rasanya puas sekali...',
    mood: 'semangat',
    moodUri: gambar5,
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.greeting}>Hallo, {NAMA_PENGGUNA} 👋</Text>
          <Text style={styles.header}>Buku Harian</Text>
        </View>
        <Image source={fotoProfil} style={styles.avatar} />
      </View>

      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          mood={entry.mood}
          moodUri={entry.moodUri}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF7FF',
  },
  content: {
    padding: 16,
    paddingBottom: 90,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  greeting: {
    fontSize: 13,
    color: '#8A7BA8',
  },
  header: {
    fontSize: 26,
    fontWeight: '800',
    color: '#3B2A57',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#C9B6F2',
  },
});