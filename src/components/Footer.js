import React from "react";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function Footer() {
  return (
<div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      
    </ul>
    <p class="text-center text-muted">© {currentYear} Cafe</p>
  </footer>
</div>
  );
}

export default Footer;