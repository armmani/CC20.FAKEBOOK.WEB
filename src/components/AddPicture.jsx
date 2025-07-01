import { PhotoIcon2 } from "../icons"

function AddPicture() {
  return (
    <div className="flex flex-col p-2 border rounded-lg">
      <div className="bg-gray-800 min-h-40 relative cursor-pointer hover:bg-black"
      onClick={() => document.getElementById('input-file').click()}>
        <input type="file" className="hidden" id="input-file" />
        <PhotoIcon2 className='w-15 absolute top-5 right-1/2 translate-1/2 opacity-60'  />
      </div>
    </div>
  )
}
export default AddPicture