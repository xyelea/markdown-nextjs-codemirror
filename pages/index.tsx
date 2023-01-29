import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useCallback } from "react";
import Preview from "@/components/preview";
import Editor from "@/components/editor";
import styles from "@/styles/Home.module.css";

const Home: NextPage = () => {
  const [doc, setDoc] = useState<string>("# Hello, World!\n");
  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>MarkdDown Editor</title>
        <meta name="description" content="markdown kodekan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} min-h-screen flex flex-col gap-2`}>
        <h1 className={`${styles.title} flex-0`}>Markdown Editor</h1>
        <div className="flex flex-1 w-full gap-4">
          <Editor initialDoc={doc} onChange={handleDocChange} />
          <Preview doc={doc} />
        </div>
      </main>
    </div>
  );
};

export default Home;

/* Kode di atas adalah sebuah halaman Next.js yang digunakan sebagai halaman utama dari aplikasi. Halaman ini menggunakan komponen React yang ditentukan pada baris import Editor dari ../components/editor. Halaman ini juga menggunakan state React dengan nama doc yang akan digunakan untuk menyimpan teks yang ditampilkan di dalam editor. State ini akan diupdate saat fungsi handleDocChange dipanggil, yang akan mengubah nilai state doc dengan nilai baru yang diterima dari fungsi tersebut. Fungsi ini di-wrap dengan useCallback untuk menghindari re-rendering yang tidak perlu. Di dalam return statement, halaman ini menampilkan komponen Editor dengan properti initialDoc di-set dengan state doc dan properti onChange di-set dengan fungsi handleDocChange . */
