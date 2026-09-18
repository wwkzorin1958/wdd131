(function () {
  // ----- LAST MODIFIED DATE -----
  const modifiedSpan = document.getElementById('lastModified');
  if (modifiedSpan) {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    modifiedSpan.textContent = `Last modified: ${now.toLocaleDateString(undefined, options)}`;
  }

  // ----- WIND CHILL -----
  const temperature = 8;
  const windSpeed = 15;

  document.getElementById('weatherTemp').textContent = `${temperature}°C`;
  document.getElementById('weatherWind').textContent = `${windSpeed} km/h`;

  function calculateWindChill(tempC, windKmh) {
    if (tempC <= 10 && windKmh > 4.8) {
      const windChill =
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(windKmh, 0.16) +
        0.3965 * tempC * Math.pow(windKmh, 0.16);
      return `${Math.round(windChill)}°C`;
    } else {
      return 'N/A';
    }
  }

  document.getElementById('weatherWindChill').textContent =
    calculateWindChill(temperature, windSpeed);

  // ----- COPYRIGHT YEAR -----
  const copyrightLine = document.querySelector('.footer .copyright');
  if (copyrightLine) {
    const year = new Date().getFullYear();
    copyrightLine.textContent = `© ${year} Hong Kong Explorer — Standard Footer content - copyright - name - location`;
  }
})();