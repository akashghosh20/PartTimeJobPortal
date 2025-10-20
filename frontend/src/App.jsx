import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import store from './redux/store'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'
import AdminJobs from "./components/admin/AdminJobs";
import PostJob from './components/admin/PostJob'
import Applicants from './components/admin/Applicants'
import PaymentManagement from './components/admin/PaymentManagement'
import ProtectedRoute from './components/admin/ProtectedRoute'
import AboutUs from './components/pages/AboutUs'
import Contact from './components/pages/Contact'
import TermsAndConditions from './components/pages/TermsAndConditions'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import Sitemap from './components/pages/Sitemap'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/description/:id",
    element: <JobDescription />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  // admin ke liye yha se start hoga
  {
    path:"/admin/companies",
    element: <ProtectedRoute><Companies/></ProtectedRoute>
  },
  {
    path:"/admin/companies/create",
    element: <ProtectedRoute><CompanyCreate/></ProtectedRoute> 
  },
  {
    path:"/admin/companies/:id",
    element:<ProtectedRoute><CompanySetup/></ProtectedRoute> 
  },
  {
    path:"/admin/jobs",
    element:<ProtectedRoute><AdminJobs/></ProtectedRoute> 
  },
  {
    path:"/admin/jobs/create",
    element:<ProtectedRoute><PostJob/></ProtectedRoute> 
  },
  {
    path:"/admin/jobs/:id/applicants",
    element:<ProtectedRoute><Applicants/></ProtectedRoute> 
  },
  {
    path:"/admin/payments",
    element:<ProtectedRoute><PaymentManagement/></ProtectedRoute> 
  },
  // Public pages
  {
    path: "/about",
    element: <AboutUs />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/terms",
    element: <TermsAndConditions />
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />
  },
  {
    path: "/sitemap",
    element: <Sitemap />
  },

])
function App() {

  return (
    <HelmetProvider>
      <Provider store={store}>
        <ThemeProvider>
          <LanguageProvider>
            <div>
              <RouterProvider router={appRouter} />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </Provider>
    </HelmetProvider>
  )
}

export default App
