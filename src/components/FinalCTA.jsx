import buildImage from '../assets/build.png';

export default function FinalCTA() {
  return (
    <section className="cta-wrap">
      <div className="section-inner">
        <div className="cta-inner">
          <div className="cta-content">
            <h2 className="cta-h2">Together, we build stronger careers.</h2>
            <p className="cta-desc">
              Share opportunities, support the community, and help the next generation of Frontliners succeed.
            </p>
            <div className="cta-buttons">
              <button className="cta-btn primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                Share a Referral
              </button>
              <a href="https://chat.frontlinesedutech.com" target="_blank" rel="noopener noreferrer" className="cta-btn secondary">
                Join the Community
              </a>
            </div>
          </div>
          <div className="cta-image-wrap">
            <img src={buildImage} alt="Community" className="cta-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
