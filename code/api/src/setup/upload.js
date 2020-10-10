// Imports
import path from 'path'
import multer from 'multer'
// Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files

// App Imports
import serverConfig from '../config/server.json'

// File upload configurations and route
export default function (server) {
  console.info('SETUP - Upload...')

  // Set destination
  const storage = multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'public', 'images', 'uploads'),
    // sets path to the storage directory

    filename: function (request, file, callback) {
      callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
      // sets name for uploaded file, multr doesn't set file type so that needs to come from originalname
    }
  })

  const upload = multer({
    storage: storage
  }).single('file')

  // Upload route – enpoint = '/upload'
  server.post(serverConfig.upload.endpoint, (request, response) => {
    upload(request, response, function (error) {
      if (!error) {
        response.json({
          success: true,
          file: request.file.filename
          // if successfully uploaded return 200(?) and filename
        })
      } else {
        response.json({
          success: false,
          file: null
        })
      }
    })
  })
}
