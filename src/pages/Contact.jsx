import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Données du formulaire :", data);
    alert("Message envoyé avec succès !");
  };
  return (
    <div className="container mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold mb-6">Contactez-moi</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Nom</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Le nom est requis." })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "L'email est requis.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Adresse email invalide",
              },
            })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Le message est requis." })}
            rows="5"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
