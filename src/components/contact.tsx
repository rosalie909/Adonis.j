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

    // --- AMÉLIORATION ICI : On prépare les données proprement ---
    const templateParams = {
      from_name: formRef.current.from_name.value,
      reply_to: formRef.current.reply_to.value,
      subject: formRef.current.subject.value,
      message: formRef.current.message.value,
      // On ajoute l'heure ici pour que {{time}} fonctionne dans ton template
      time: new Date().toLocaleString("fr-FR", { 
        weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' 
      }),
    };

    // --- On utilise .send à la place de .sendForm ---
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        (result) => {
          console.log("✅ Message envoyé !", result.status, result.text);
          alert(`Merci ${templateParams.from_name}, votre message a été envoyé !`);
          formRef.current?.reset();
        },
        (error) => {
          console.error("❌ Erreur :", error);
          alert("Erreur lors de l'envoi du message.");
        }
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-5 md:px-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            <span className="text-[#E03BF2]">CONTACT</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Remplissez le formulaire ci-dessous pour me laisser un message.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-10 p-8 rounded-2xl shadow-lg bg-white border border-gray-100">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="from_name" // Correspond à {{from_name}}
                placeholder="Prénom et Nom"
                required
                className="input input-bordered w-full p-3 border rounded-lg focus:border-[#A8D2DF] focus:outline-none transition-colors"
              />
              <input
                type="email"
                name="reply_to" // Correspond à {{reply_to}}
                placeholder="Votre Email"
                required
                className="input input-bordered w-full p-3 border rounded-lg focus:border-[#A8D2DF] focus:outline-none transition-colors"
              />
            </div>

            <input
              type="text"
              name="subject" // Correspond à {{subject}}
              placeholder="Sujet"
              required
              className="input input-bordered w-full p-3 border rounded-lg focus:border-[#A8D2DF] focus:outline-none transition-colors"
            />

            <textarea
              name="message" // Correspond à {{message}}
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