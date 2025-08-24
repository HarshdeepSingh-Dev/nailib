import ClientReviewsCarousal from "./ClientReviewsCarousal";

const ClientReviews = () => {
    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
                    From our students
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
                    See how our learners and Students have achieved outstanding results.
                </p>
                {/* carousal */}
                <ClientReviewsCarousal/>
            </div>
        </div>
    )
}

export default ClientReviews;