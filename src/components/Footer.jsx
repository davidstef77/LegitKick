import { SocialIcon } from 'react-social-icons';


function Footer() {
  return (
    <footer>
      <h2>Contact</h2>
      <p>Alătură-te pentru noi modele, giveaways și noutăți.</p>
      <div className="SocialIcons">
        <SocialIcon url="https://www.instagram.com" className="icon" />
        <SocialIcon url="https://www.tiktok.com" className="icon" />
      </div>
    </footer>
  );
}

export default Footer;
