import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page" style={{ fontFamily: 'Arial, sans-serif' }}>
      <section className="section" style={{ backgroundColor: '#f8f9fa', padding: '50px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#007bff' }}>A QUARTER YEAR-OLD SCIENCE SLOT</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
            Established in 1992 with 6 faculties, 1 vocational school and 3 institutes, Kocaeli University is one of the leading science and education centers of our country. During the days that we are celebrating the 25th anniversary of the establishment of our university, we have justified pride of our contribution to the development of our country and science.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#ffffff', padding: '50px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#007bff' }}>A FABULOUS CAMPUS</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
            August 17, 1999 is a painful history of great losses both for our country and our university. This great destruction caused by the Marmara earthquake caused 75% of our university to disappear, but with its own power, our University quickly relieved itself and reached today’s modern and fully developed campus.
          </p>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
            The first designed campus in Turkey, Umuttepe Campus is one of the unique campuses in Turkey and in the world. Located in the center of nature, away from the noise of the city with a spacious air our campus has a special location in an area of 6500 acres and has a proud identity with sports facilities, research and application hospital, modern educational institutions and social areas.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#f8f9fa', padding: '50px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#007bff' }}>KOCAELİ UNIVERSITY TODAY</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
            It is a huge educational institution serving with 19 faculties, 3 schools, 16 vocational schools and a state conservatory. With more than 63.000 students, our university has an important position in the research and development (R & D) activities of our country with its 15 Research and Application Centers and 28 Research and Application Units. Rank first among the student activities with 91 Student Clubs and Groups, it carries out social responsibility activities and social and cultural activities through its clubs.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
