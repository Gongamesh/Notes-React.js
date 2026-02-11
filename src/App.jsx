import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Home'
import NotFound from './pages/NotFound'
import About from './About'
import AddNote, { addNoteAction } from './pages/AddNote'
import RouteLayout from './layouts/RouteLayout'
import AllNotes, { notesLoader } from './pages/AllNotes'
import NoteDetails, { noteDetailsLoader } from './pages/NoteDetails'
import NotesError from './pages/NotesError'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RouteLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='notes' errorElement={<NotesError />}>
        <Route index element={<AllNotes />} loader={notesLoader} />
        <Route path=':id' element={<NoteDetails />} loader={noteDetailsLoader}/>
      </Route>
      <Route path='new' element={<AddNote />} action={addNoteAction} />

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
