"use client";

import "../globals.css";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import VideoBackground from "../../components/VideoBackground";

export default function AILister() {
  return (
    <>
      <Head>
        <title>AI Lister: Automated Listing Tool</title>
      </Head>
      <div className="container">
        <VideoBackground />
        <Header />
        <div className="content ai-lister-content">
          <h1>AI Lister: Automated Listing Tool</h1>
          <p>
            The AI Lister is a PyQt5-based desktop application developed for my Bachelor’s thesis to automate clothing listings on e-commerce platforms like eBay and Vinted. It integrates computer vision for color extraction, a fine-tuned BERT model for category classification, and a large language model (TinyLlama) for generating platform-specific titles and descriptions, streamlining the listing process for sellers.
          </p>

          <div className="ai-lister-demo">
            <Image
              src="/automated-lister-demo.gif"
              alt="AI Lister Main Interface"
              className="demo-gif"
              width={500}
              height={500}
            />
          </div>
          <h2>Key Features</h2>
          <ul>
            <li><strong>Color Extraction:</strong> Uses SAM2 for segmentation and K-means clustering to extract dominant colors from clothing images, achieving a 99.3% segmentation success rate.</li>
            <li><strong>Category Classification:</strong> Fine-tuned BERT model classifies items into platform-specific categories (e.g., 0.9964 accuracy for eBay, 0.9738 for Vinted).</li>
            <li><strong>Text Generation:</strong> TinyLlama generates tailored titles and descriptions for eBay (keyword-rich) and Vinted (concise, trendy) using few-shot prompting.</li>
            <li><strong>User Interface:</strong> Multi-page PyQt5 interface with image carousel, progress updates, and editable outputs for a seamless user experience.</li>
            <li><strong>Custom Dataset:</strong> Built synthetic datasets for training and evaluation, addressing gaps in e-commerce data.</li>
          </ul>
          <h2>Resources</h2>
          <p>
            Explore the code, datasets, and Jupyter notebooks for reproducibility on the project’s GitHub repository: 
            <a href="https://github.com/C-Boateng/Automated-Listing-Tool" target="_blank" rel="noopener noreferrer"> Automated Listing Tool</a>.
          </p>
        </div>
      </div>
    </>
  );
}