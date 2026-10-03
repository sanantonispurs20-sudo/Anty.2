import { db } from './firebase';
import { collection, addDoc, getDocs, query, where, serverTimestamp, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const REVIEWS_COLLECTION = 'reviews';

export const firestoreService = {
  addReview: async (userId, movie, rating, reviewText) => {
    try {
      const docRef = await addDoc(collection(db, REVIEWS_COLLECTION), {
        userId,
        movieId: movie.id,
        movieTitle: movie.title,
        moviePoster: movie.poster_path,
        rating,
        reviewText,
        createdAt: serverTimestamp(),
      });
      return docRef.id;
    } catch (error) {
      console.error('Error adding review:', error);
      throw error;
    }
  },

  getUserReviews: async (userId) => {
    try {
      const q = query(collection(db, REVIEWS_COLLECTION), where('userId', '==', userId));
      const querySnapshot = await getDocs(q);
      const reviews = [];
      querySnapshot.forEach((doc) => {
        reviews.push({ id: doc.id, ...doc.data() });
      });
      return reviews;
    } catch (error) {
      console.error('Error fetching reviews:', error);
      return [];
    }
  }
};
