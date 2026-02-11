import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Home'
import NotFound from './pages/NotFound'
import AddNote, { addNoteAction } from './pages/notes/AddNote'
import RouteLayout from './layouts/RouteLayout'
import AllNotes, { notesLoader } from './pages/notes/AllNotes'
import NoteDetails, { noteDetailsLoader } from './pages/notes/NoteDetails'
import NotesError from './pages/notes/NotesError'
import AboutLayout from './layouts/AboutLayout'
import Faq from './pages/help/Faq'
import Contact, { contactForm } from './pages/help/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RouteLayout />}>
      <Route index element={<Home />} />

      <Route path='about' element={<AboutLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} action={contactForm} />
      </Route>

      <Route path='notes' errorElement={<NotesError />}>
        <Route index element={<AllNotes />} loader={notesLoader} />
        <Route path=':id' element={<NoteDetails />} loader={noteDetailsLoader}/>
        <Route path='new' element={<AddNote />} action={addNoteAction} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
