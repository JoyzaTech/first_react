import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/css/index.css';
import './pages/css/Footer_Theme.css';
import Test from './pages/Test';
import FooterTheme from './components/Footer_Theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProfileCard from './components/ProfileCard';
import Gallery from './components/Gallery';

const sampleImages = [
    {
        pictureName: 'Sunset Bliss',
        pictureURL: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        altText: 'A beautiful sunset over the ocean',
    },
    {
        pictureName: 'Mountain Escape',
        pictureURL: 'https://images.unsplash.com/photo-1717347547106-2f0182828071?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        altText: 'Beachside view over the coast of a town',
    },
    {
        pictureName: 'City Lights',
        pictureURL: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        altText: 'Nighttime view of a cityscape with glowing lights',
    },
    {
        pictureName: 'Concert',
        pictureURL: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        altText: 'A concert',
    },
    {
        pictureName: 'Rocket Launch',
        pictureURL: 'https://images.unsplash.com/photo-1457364983758-510f8afa9f5f?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        altText: 'A white rocket headed into the sky',
    },
    {
        pictureName: 'Ocean Wave',
        pictureURL: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        altText: 'A powerful ocean wave crashing into the sea',
    },
];
// Layout component that includes the footer
const Layout = ({ children }) => {
  return (
      <div className="layout">
          {children}
          <FooterTheme
              logo="/images/stryder_cutout.png"
              about={{
                  "About Us": "/about",
                  "FAQ": "/faq",
                  "Contact": "/contact",
                  "Privacy Policy": "/privacy"
              }}
              socialLinks={{
                  github: "https://github.com/yourcompany",
                  instagram: "https://instagram.com/yourcompany",
                  facebook: "https://facebook.com/yourcompany"
              }}
              services={[
                  "Web Development",
                  "Mobile Apps",
                  "Cloud Solutions",
                  "Consulting"
              ]}
          />
      </div>
  );
};

const router = createBrowserRouter([
    {
        path: '/test',
        element: (
            <Layout>
                <Test />
            </Layout>
        )
    },
    {
        path: '/card',
        element: (
            <Layout>
                <div>
                    <ProfileCard
                        profileImage=""
                        firstName="John"
                        lastName="Doe"
                        email="johndoe@example.com"
                        socialLinks={{
                            github: "https://github.com/johndoe",
                            instagram: "https://instagram.com/johndoe",
                            facebook: "https://facebook.com/johndoe",
                        }}
                    />
                </div>
            </Layout>
        ),
    },
    {
        path: '/',
        element: (
            <Layout>
                 <Gallery images={sampleImages} />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                    <ProfileCard
                        profileImage=""
                        firstName="John"
                        lastName="Doe"
                        email="johndoe@example.com"
                        socialLinks={{
                            github: "https://github.com/johndoe",
                            instagram: "https://instagram.com/stryder_random01",
                            facebook: "https://facebook.com/johndoe",
                        }}
                    />
                    <ProfileCard
                        profileImage=""
                        firstName="Jane"
                        lastName="Smith"
                        email="janesmith@example.com"
                        socialLinks={{
                            github: "https://github.com/janesmith",
                            instagram: "https://instagram.com/janesmith",
                            facebook: "https://facebook.com/janesmith",
                        }}
                    />
                    <ProfileCard
                        profileImage=""
                        firstName="Alice"
                        lastName="Brown"
                        email="alicebrown@example.com"
                        socialLinks={{
                            github: "https://github.com/alicebrown",
                            instagram: "https://instagram.com/alicebrown",
                            facebook: "https://facebook.com/alicebrown",
                        }}
                    />
                    <ProfileCard
                        profileImage=""
                        firstName="Bob"
                        lastName="Johnson"
                        email="bobjohnson@example.com"
                        socialLinks={{
                            github: "https://github.com/bobjohnson",
                            instagram: "https://instagram.com/bobjohnson",
                            facebook: "https://facebook.com/bobjohnson",
                        }}
                    />
                </div>
            </Layout>
        )
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);