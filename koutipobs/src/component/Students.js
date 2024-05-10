import React, { useState } from 'react';

const StudentResultForm = () => {
  // State variables to hold input values and result data
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if student ID and password match
    if (studentId === '220601172' && password === 'Sssaaa@26072004') {
      // If matched, set the result data
      setResult([
        { donem: 2, kurul: 2, dersAdi: 'Dolaşım ve Solunum Sistemleri', vize: 61.3 },
        { donem: 1, kurul: 1, dersAdi: 'Sindirim Sistemi ve Metabolizma', vize: 51.2 },
        { donem: 2, kurul: 2, dersAdi: 'Urogenital Sistem ve Endokrin Sistem', vize: 55.2 },
        { donem: 1, kurul: 1, dersAdi: 'Sinir Sistemi ve Duyu Organları', vize: 60.2 }
      ]);
      // Reset error message
      setErrorMessage('');
    } else {
      // If not matched, reset the result data and set error message
      setResult(null);
      setErrorMessage('Invalid student ID or password');
      // Show alert
      alert('Invalid student ID or password');
    }
  };

  return (
    <div className="container">
      {!result ? (
        <form onSubmit={handleSubmit} style={{ marginTop: '50px' }}>
          <div className="mb-3 row">
            <label htmlFor="studentId" className="col-sm-2 col-form-label">Student ID:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="studentId" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}
          <footer style={{ marginTop: '20px', textAlign: 'center', color: '#6c757d' }}>© 2024 KOU TIP FAKÜLTESİ. Proudly powered by Sydney</footer>
        </form>
      ) : null}
      {result && (
        <div className="container">
          <div className="alert alert-info text-center" role="alert" style={{ marginTop: '20px' }}>
            220601172 <br /> NİSA ŞİŞMAN <br /> Tıp Fakültesi <br /> Tıp
          </div>
          <table className="table" style={{ marginTop: '20px' }}>
            <thead>
              <tr>
                <th scope="col">Donem</th>
                <th scope="col">Kurul</th>
                <th scope="col">Ders Adi</th>
                <th scope="col">Vize</th>
              </tr>
            </thead>
            <tbody>
              {result.map((item, index) => (
                <tr key={index}>
                  <td>{item.donem}</td>
                  <td>{item.kurul}</td>
                  <td>{item.dersAdi}</td>
                  <td>{item.vize}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <footer style={{ marginTop: '20px', textAlign: 'center', color: '#6c757d' }}>© 2024 KOU TIP FAKÜLTESİ. Proudly powered by Sydney</footer>
        </div>
      )}
    </div>
  );
};

export default StudentResultForm;

