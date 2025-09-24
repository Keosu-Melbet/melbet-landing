<form
  action="https://script.google.com/macros/s/AKfycbzp5Gg8yyOZFKRiFl3-qo9E2fb6GrPR4eMdtngvN3ORZuXpfNwZBy6iP8VqYZH5Q_YY/exec"
  method="POST"
  className="mt-8 flex flex-col space-y-4 bg-gray-800 p-6 rounded-xl w-full max-w-sm shadow-lg"
>
  <input
    name="name"
    type="text"
    placeholder="Họ và tên"
    className="p-3 rounded bg-gray-700 text-white outline-none"
    required
  />
  <input
    name="email"
    type="email"
    placeholder="Email"
    className="p-3 rounded bg-gray-700 text-white outline-none"
    required
  />
  <button
    type="submit"
    className="bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-lg font-semibold"
  >
    Gửi thông tin
  </button>
</form>
