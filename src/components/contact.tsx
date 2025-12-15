import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsLoading(true);

    const serviceID = "service_8iuwxkg";
    const templateID = "template_3id8njq"; 
    const publicKey = "kGP5Rda2xNe7g__Yw";

    emailjs
      .sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(
        (result) => {
          console.log("✅ Message envoyé !", result.status, result.text);
          alert("Message envoyé avec succès !");
          formRef.current?.reset(); // vide automatiquement le formulaire
        },
        (error) => {
          console.error("❌ Erreur :", error);
          alert("Erreur lors de l'envoi du message. Vérifie la console.");
        }
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-5 md:px-10">
        {/* Titre */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            <span className="text-[#E03BF2]">CONTACT</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Remplissez le formulaire ci-dessous pour me laisser un message.
          </p>
        </div>

        {/* Formulaire */}
        <div className="max-w-3xl mx-auto mt-10 p-8 rounded-2xl shadow-lg bg-white border border-gray-100">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="from_name"
                placeholder="Votre Nom"
                required
                className="input input-bordered w-full p-3 border rounded-lg focus:border-[#A8D2DF] focus:outline-none transition-colors"
              />
              <input
                type="email"
                name="reply_to"
                placeholder="Votre Email"
                required
                className="input input-bordered w-full p-3 border rounded-lg focus:border-[#A8D2DF] focus:outline-none transition-colors"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Sujet"
              required
              className="input input-bordered w-full p-3 border rounded-lg focus:border-[#A8D2DF] focus:outline-none transition-colors"
            />

            <textarea
              name="message"
              placeholder="Votre Message"
              required
              className="textarea textarea-bordered w-full h-32 p-3 border rounded-lg focus:border-[#A8D2DF] focus:outline-none transition-colors resize-none"
            ></textarea>

            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className={`btn text-white font-bold py-3 px-10 rounded-lg transition duration-300 ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#E03BF2] hover:bg-[#A8D2DF]"
                }`}
              >
                {isLoading ? "Envoi en cours..." : "Envoyer le message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
