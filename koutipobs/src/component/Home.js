import React from 'react';

const HomePage = () => {
  // Define inline styles
  const styles = {
    header: {
      backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMGd0MiRrEmd5vrtMYjX1iA_dR4TySkIpqQ&s')", // Header Background Image
      backgroundSize: 'cover',
      color: '#fff',
      padding: '100px 0',
      textAlign: 'center',
    },
    headerContent: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    features: {
      padding: '50px 0',
      textAlign: 'center',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    feature: {
      flex: '1',
      padding: '0 20px',
    },
    featureImg: {
      width: '100%',
      borderRadius: '8px',
    },
    cta: {
      backgroundColor: '#f7f7f7',
      padding: '100px 0',
      textAlign: 'center',
    },
    btn: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
    },
    footer: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px 0',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.homePage}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1>Welcome to Koutipobs University</h1>
          <p>Empowering minds, shaping futures</p>
        </div>
      </header>

      <section style={styles.features}>
        <div style={styles.container}>
          <h2>Discover Our Features</h2>
          <div style={styles.featureList}>
            <div style={styles.feature}>
              <img src="https://image.free-apply.com/gallery/l/uni/gallery/lg/1079200145/f1408fcf8b217ef599e7268d52aa47328122cef5.jpg?s=640" alt="Feature 1" style={styles.featureImg} /> {/* Feature 1 Image */}
              <h3>World-class Education</h3>
              <p>Offering a wide range of programs to prepare students for success.</p>
            </div>
            <div style={styles.feature}>
              <img src="https://imtiyaz-cms-media.s3.me-south-1.amazonaws.com/2_e0629673fd.jpg" alt="Feature 2" style={styles.featureImg} /> {/* Feature 2 Image */}
              <h3>Diverse Community</h3>
              <p>Bringing together students from various backgrounds and cultures.</p>
            </div>
            <div style={styles.feature}>
              <img src="https://merttonan.files.wordpress.com/2013/11/dsc_0020.jpg?w=768" alt="Feature 3" style={styles.featureImg} /> {/* Feature 3 Image */}
              <h3>Cutting-edge Research</h3>
              <p>Driving innovation and making breakthroughs in various fields.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.cta}>
        <div style={styles.container}>
          <h2>Join Us Today</h2>
          <p>Take the first step towards your future by enrolling at Koutipobs University.</p>
          <button style={styles.btn}>Apply Now</button>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.container}>
          <p>&copy; 2024 Koutipobs University. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
