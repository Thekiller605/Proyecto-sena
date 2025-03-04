import React, { useState } from "react";
import cancha from "./imagen/canchasin.png";
import cancha2 from "./imagen/cancha2.jpg";

const imagen = {
  gps: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  ),
  trofeo: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
      />
    </svg>
  ),

  estrella: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#FFC107"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  Tienda: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg>
  ),
};

const SportsFieldBooking = () => {
  const [selectedField, setSelectedField] = useState("Fútbol 7");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [startTime, setStartTime] = useState("13:00");
  const [endTime, setEndTime] = useState("14:00");
  const [showBookingSummary, setShowBookingSummary] = useState(false);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Lucas Morales",
      date: "13/04/2023",
      fieldType: "Fútbol 7",
      rating: 4,
      comment:
        "Reservar esta cancha fue muy sencillo y la calidad del césped sintético es impresionante. Mis amigos y yo disfrutamos de un partido increíble sin ningún inconveniente. Definitivamente volveré a reservar aquí.",
    },
    {
      id: 2,
      name: "María Gómez",
      date: "13/04/2023",
      fieldType: "Fútbol 5",
      rating: 5,
      comment:
        "Me encantó jugar en esta cancha. El espacio es amplio, las condiciones son perfectas, y además ofrecen un servicio al cliente excelente. Lo recomendaría a cualquiera que quiera pasar un buen rato.",
    },
    {
      id: 3,
      name: "Javier Torres",
      date: "13/04/2023",
      fieldType: "Fútbol 7",
      rating: 5,
      comment:
        "La cancha está en perfectas condiciones, y el proceso de reserva fue rápido y sin complicaciones. El césped se siente casi natural. Fue una gran experiencia para todos.",
    },
  ]);
  const [newReview, setNewReview] = useState({
    name: "Usuario Actual",
    fieldType: selectedField,
    rating: 5,
    comment: "",
  });
  const [showAllReviews, setShowAllReviews] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectField = (field) => {
    setSelectedField(field);
    setIsDropdownOpen(false);
    setNewReview({ ...newReview, fieldType: field });
  };

  const toggleOpenStatus = () => {
    setIsOpen(!isOpen);
  };

  const calculatePrice = () => {
    // Precio base según el tipo de cancha
    const basePrice = {
      "Fútbol 5": 60000,
      "Fútbol 7": 80000,
      "Fútbol 9": 100000,
      "Fútbol 11": 120000,
    }[selectedField];

    // Calcular duración en horas
    const start = parseInt(startTime.split(":")[0]);
    const end = parseInt(endTime.split(":")[0]);
    const duration = end - start;

    return basePrice * duration;
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const formattedDate = `${today.getDate().toString().padStart(2, "0")}/${(
      today.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${today.getFullYear()}`;

    const review = {
      id: reviews.length + 1,
      name: newReview.name,
      date: formattedDate,
      fieldType: newReview.fieldType,
      rating: newReview.rating,
      comment: newReview.comment,
    };

    setReviews([review, ...reviews]);
    setNewReview({ ...newReview, comment: "", rating: 5 });
  };

  const handleRatingChange = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const handlePayment = () => {
    setShowBookingSummary(true);
  };

  const confirmPayment = () => {
    alert("¡Reserva confirmada! Gracias por su pago.");
    setShowBookingSummary(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* encabezado de navegacion */}
      <nav className="bg-white p-4 shadow-md flex justify-between items-center">
        <button className="bg-[#00b04b] text-gray-700 px-4 py-2 rounded-md text-sm transition duration-400 ease-in-out hover:bg-[#71fe8e] ">
          Logo
        </button>
        <button className="bg-[#00b04b] text-gray-700 px-4 py-2 rounded-md text-sm flex items-center transition duration-400 ease-in-out hover:bg-[#71fe8e] ">
          Profile <span className="ml-1">👤</span>
        </button>
      </nav>

      {/* Resumen de reservas*/}
      {showBookingSummary && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Resumen de Reserva</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Tipo de cancha:</span>
                <span className="font-medium">{selectedField}</span>
              </div>
              <div className="flex justify-between">
                <span>Fecha:</span>
                <span className="font-medium">27/02/2025</span>
              </div>
              <div className="flex justify-between">
                <span>Horario:</span>
                <span className="font-medium">
                  {startTime} - {endTime}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Duración:</span>
                <span className="font-medium">1 hora</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total a pagar:</span>
                <span>${calculatePrice().toLocaleString()} COP</span>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-500 mb-4">
                  Al confirmar, acepta los términos y condiciones de reserva de
                  MeteGol.
                </p>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowBookingSummary(false)}
                    className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-md"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={confirmPayment}
                    className="flex-1 py-2 bg-[#00b04b] text-white rounded-md hover:bg-[#009040]"
                  >
                    Confirmar y Pagar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contenido principal*/}
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {/* Left column: Venue info */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              {/* Venue header */}
              <div className="flex items-start mb-4">
                <div className="bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                  <span className="text-gray-600">🏟️</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-bold text-lg">Canchas MeteGol</h2>
                  <div className="flex">
                    {imagen.gps}
                    <p className="text-sm text-gray-500">
                      Calle 3 N°00-00 Barrio salado
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white p-2 rounded-md border border-gray-200">
                    <span className="flex items-center text-sm">
                      <span className="text-yellow-500 mr-1">
                        {imagen.trofeo}
                      </span>
                      Preferido
                    </span>
                  </div>
                  <div className="mt-3 text-sm text-gray-600">
                    <button
                      className={`text-white px-4 py-2 rounded-md text-sm transition duration-400 ease-in-out ${
                        isOpen
                          ? "bg-[#00b04b] hover:bg-[#009040]"
                          : "bg-red-500 hover:bg-red-600"
                      }`}
                      onClick={toggleOpenStatus}
                    >
                      {isOpen ? "Abierto" : "Cerrado"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Image gallery */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-md overflow-hidden">
                  <div className="w-full h-32 flex items-center justify-center">
                    <img src={cancha} alt="cancha" />
                  </div>
                </div>
                <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-md overflow-hidden">
                  <div className="w-full h-32 flex items-center justify-center">
                    <img src={cancha2} alt="" />
                  </div>
                </div>
              </div>

              {/* Manager info */}
              <div className="flex items-center mb-4">
                <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <span className="text-gray-600">👤</span>
                </div>
                <div>
                  <h3 className="font-medium">Encargado: Juan Avila</h3>
                </div>
              </div>

              {/* Venue description */}
              <p className="text-sm text-gray-700 mb-6">
                Canchas MeteGoles una empresa especializada en la administración
                y alquiler de canchas sintéticas de última generación. Ofrecemos
                espacios deportivos de alta calidad para fútbol 5, 7 y 9, con
                césped sintético de alta resistencia, iluminación LED, graderías
                cómodas y vestuarios equipados. Nuestras canchas garantizan
                durabilidad, confort y un excelente rendimiento para jugadores
                de todos los niveles.
              </p>

              {/* Available fields */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Canchas disponibles:</h3>
                <div className="space-y-2">
                  <div className="flex justify-between bg-gray-100 px-3 py-2 rounded-md">
                    <span className="text-sm">Fútbol 5</span>
                    <span className="text-sm text-gray-500">(3)</span>
                  </div>
                  <div className="flex justify-between bg-gray-100 px-3 py-2 rounded-md">
                    <span className="text-sm">Fútbol 7</span>
                    <span className="text-sm text-gray-500">(2)</span>
                  </div>
                  <div className="flex justify-between bg-gray-100 px-3 py-2 rounded-md">
                    <span className="text-sm">Fútbol 9</span>
                    <span className="text-sm text-gray-500">(3)</span>
                  </div>
                  <div className="flex justify-between bg-gray-100 px-3 py-2 rounded-md">
                    <span className="text-sm">Fútbol 11</span>
                    <span className="text-sm text-gray-500">(1)</span>
                  </div>
                </div>
              </div>

              <hr className="my-6" />

              {/* Additional services */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Servicios adicionales:</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center text-sm">
                    <span className="mr-2"></span>
                    <span>Árbitro</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="mr-2">🚿</span>
                    <span>Baños</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="mr-2">
                      <div> {imagen.Tienda}</div>
                    </span>

                    <span>Tienda</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="mr-2">🍹</span>
                    <span>Bar</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="mr-2">🚗</span>
                    <span>Parqueadero</span>
                  </div>
                </div>
              </div>

              <hr className="my-6" />

              {/* Ratings */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium">Valoración general:</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1"></span>{" "}
                    {imagen.estrella}
                    <span className="font-medium">4.8</span>
                    <span className="text-gray-500 text-sm ml-1">(23)</span>
                    <div className="ml-3 bg-gray-100 px-2 py-1 rounded-md text-sm">
                      {reviews.length} Reseñas
                    </div>
                  </div>
                </div>

                <div className="space-y-1 mb-4">
                  <div className="flex items-center">
                    <span className="w-4 text-sm mr-2">5</span>
                    <div className="flex-1 bg-gray-200 h-2 rounded-full">
                      <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 text-sm mr-2">4</span>
                    <div className="flex-1 bg-gray-200 h-2 rounded-full">
                      <div className="bg-green-500 h-2 rounded-full w-1/5"></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 text-sm mr-2">3</span>
                    <div className="flex-1 bg-gray-200 h-2 rounded-full">
                      <div className="bg-green-500 h-2 rounded-full w-0"></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 text-sm mr-2">2</span>
                    <div className="flex-1 bg-gray-200 h-2 rounded-full">
                      <div className="bg-green-500 h-2 rounded-full w-0"></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 text-sm mr-2">1</span>
                    <div className="flex-1 bg-gray-200 h-2 rounded-full">
                      <div className="bg-green-500 h-2 rounded-full w-0"></div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-6" />

              {/* Add review form */}
              <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-3">Deja tu reseña</h3>
                <form onSubmit={handleReviewSubmit}>
                  <div className="mb-3">
                    <div className="flex items-center mb-2">
                      <label className="mr-4 text-sm">Calificación:</label>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            className="text-2xl focus:outline-none"
                            onClick={() => handleRatingChange(star)}
                          >
                            <span
                              className={
                                star <= newReview.rating
                                  ? "text-yellow-500"
                                  : "text-gray-300"
                              }
                            ></span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="w-full border rounded-md p-2 text-sm"
                      rows="3"
                      placeholder="Comparte tu experiencia con esta cancha..."
                      value={newReview.comment}
                      onChange={(e) =>
                        setNewReview({ ...newReview, comment: e.target.value })
                      }
                      required
                    ></textarea>
                  </div>
                  <div className="text-right">
                    <button
                      type="submit"
                      className="bg-[#00b04b] text-white px-4 py-2 rounded-md text-sm hover:bg-[#009040]"
                    >
                      Publicar reseña
                    </button>
                  </div>
                </form>
              </div>

              {/* Reviews */}
              <div className="space-y-6">
                <h3 className="font-medium mb-3">Reseñas de usuarios:</h3>

                {/* Display reviews */}
                {reviews
                  .slice(0, showAllReviews ? reviews.length : 3)
                  .map((review) => (
                    <div key={review.id} className="border-b pb-6">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                          <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                            <span className="text-gray-600">👤</span>
                          </div>
                          <span className="font-medium">{review.name}</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          {review.date} - {review.fieldType}
                        </div>
                      </div>
                      <div className="flex text-yellow-500 mb-2">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                          ))}
                      </div>
                      <p className="text-sm">"{review.comment}"</p>
                    </div>
                  ))}

                {reviews.length > 3 && (
                  <div className="text-center">
                    <button
                      className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md text-sm"
                      onClick={() => setShowAllReviews(!showAllReviews)}
                    >
                      {showAllReviews
                        ? "Mostrar menos"
                        : "Mostrar todas las reseñas"}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="text-center text-sm text-gray-500 mb-6"></div>
          </div>

          {/* Right column: Booking area */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 mb-6 sticky top-4">
              {/* Placeholder for calendar */}
              <div className="mb-6">
                <h3 className="font-semibold mb-4">February 2025</h3>
                <div className="bg-gray-100 rounded-md p-4 h-64 flex items-center justify-center">
                  <span className="text-gray-500">Calendar placeholder</span>
                </div>
              </div>

              {/* Booking times */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="text-sm text-gray-500 block mb-1">
                    Desde:
                  </label>
                  <select
                    className="w-full border rounded-md px-3 py-2 text-sm"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  ></select>
                </div>
                <div>
                  <label className="text-sm text-gray-500 block mb-1">
                    Hasta:
                  </label>
                  <select
                    className="w-full border rounded-md px-3 py-2 text-sm"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                  ></select>
                </div>
              </div>

              {/* Field type */}
              <div className="mb-6">
                <label className="text-sm text-gray-500 block mb-1">
                  Tipo de cancha
                </label>
                <div className="relative inline-block text-left w-full">
                  <button
                    type="button"
                    onClick={toggleDropdown}
                    className="inline-flex w-full justify-between items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 ring-1 ring-gray-300 shadow-sm hover:bg-gray-50"
                  >
                    {selectedField}
                    <svg
                      className="size-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-none">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex="-1"
                      >
                        <button
                          onClick={() => selectField("Fútbol 5")}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          tabIndex="-1"
                        >
                          Fútbol 5
                        </button>
                        <button
                          onClick={() => selectField("Fútbol 7")}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          tabIndex="-1"
                        >
                          Fútbol 7
                        </button>
                        <button
                          onClick={() => selectField("Fútbol 7")}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          tabIndex="-1"
                        >
                          Fútbol 7
                        </button>
                        <button
                          onClick={() => selectField("Fútbol 9")}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          tabIndex="-1"
                        >
                          Fútbol 9
                        </button>
                        <button
                          onClick={() => selectField("Fútbol 11")}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          tabIndex="-1"
                        >
                          Fútbol 11
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Additional service selection */}
              <div className="mb-6">
                <h3 className="text-sm text-gray-500 mb-3">
                  Servicios adicionales:
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <span className="ml-2 text-sm">Árbitro (+$35.000)</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <span className="ml-2 text-sm">Balón (+$10.000)</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <span className="ml-2 text-sm">Chalecos (+$15.000)</span>
                  </label>
                </div>
              </div>

              {/* Price calculation */}
              <div className="bg-gray-50 p-4 rounded-md mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Precio de cancha:</span>
                  <span className="font-medium">
                    ${calculatePrice().toLocaleString()} COP
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Servicios adicionales:</span>
                  <span className="font-medium">$0 COP</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="font-medium">Total:</span>
                  <span className="font-bold">
                    ${calculatePrice().toLocaleString()} COP
                  </span>
                </div>
              </div>

              {/* Booking button */}
              <button
                className="w-full bg-[#00b04b] text-white py-3 rounded-md font-medium hover:bg-[#009040] transition duration-300"
                onClick={handlePayment}
              >
                Reservar Ahora
              </button>

              {/* Field availability info */}
              <div className="mt-4 text-center">
                <span className="text-xs text-gray-500">
                  2 canchas disponibles para esta fecha y hora
                </span>
              </div>

              {/* Contact information */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h3 className="font-medium mb-2">¿Necesitas ayuda?</h3>
                <div className="text-sm space-y-2">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>+57 300 123 4567</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>reservas@metegol.com</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M10 4a1 1 0 011 1v4.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 10V5a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Lun-Dom 7:00am - 10:00pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsFieldBooking;
