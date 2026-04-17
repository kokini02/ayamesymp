// firebase-config.js

// Firebase SDKの機能をインポート（CDN経由）
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- 自分のFirebaseコンソールからコピーした情報に書き換え ---
const firebaseConfig = {

  apiKey: "AIzaSyBTPrnoAABJS2cByUBdxk5vAyxctwuXcaA",

  authDomain: "ayame-sym.firebaseapp.com",

  projectId: "ayame-sym",

  storageBucket: "ayame-sym.firebasestorage.app",

  messagingSenderId: "4798305242",

  appId: "1:4798305242:web:409159dff9d38f02b766e3",

  measurementId: "G-4JML9M563V"

};
// ---------------------------------------------------

// Firebaseの初期化
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 他のファイル（index.htmlやadmin.html）から使えるように書き出し
export { db, doc, setDoc, getDoc };