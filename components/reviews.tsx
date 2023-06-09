
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { StarIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface Review {
  id: number;
  rating: number;
  content: string;
  designation: string;
  author: string;
  avatarSrc: string;
}


const reviews: Review[] = [
  
  {
      id: 1,
      rating: 5,
      content: `
    "I tried the online visa photo maker and it was incredibly easy to use. The software ensured that my photo met all the necessary requirements. Highly recommended!
    `,
      designation: 'Founder @ Rolex',
      author: 'Sabo Masties',
      avatarSrc:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
  },
  {
      id: 2,
      rating: 5,
      content: `
    "I tried the online visa photo maker and it was incredibly easy to use. The software ensured that my photo met all the necessary requirements. Highly recommended!
    `,
      designation: 'Founder @ Rolex',
      author: 'Sabbbo Masties',
      avatarSrc:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
  },
  {
      id: 3,
      rating: 5,
      content: `
    "I tried the online visa photo maker and it was incredibly easy to use. The software ensured that my photo met all the necessary requirements. Highly recommended!
    `,
      designation: 'Founder @ Rolex',
      author: 'sabaaa Masties',
      avatarSrc:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
  },
  {
      id: 4,
      rating: 5,
      content: `
      "I tried the online visa photo maker and it was incredibly easy to use. The software ensured that my photo met all the necessary requirements. Highly recommended!
      `,
      designation: 'Founder @ Rolex',
      author: 'Saba Masties',
      avatarSrc:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
  },

]


function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Reviews() {
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage, setReviewsPerPage] = useState(3);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const visibleReviews = reviews.slice(startIndex, endIndex);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 640;
      setIsMobileScreen(isMobile);
      setReviewsPerPage(isMobile ? 1 : 3);
      setCurrentPage(1); // Reset current page when switching between mobile and non-mobile screens
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="mt-12 mx-auto max-w-7xl px-6 sm:px-8 bg-white">
        <div>
          <h2 className="text-2xl sm:text-4xl font-semibold">What our Customers Say?</h2>

          <div className={`grid grid-cols-${reviewsPerPage} gap-6 mt-12`}>
            {visibleReviews.map((review) => (
              <div key={review.id} className="text-sm max-w-md rounded-lg shadow-lg p-4 text-gray-500">
                {/* Review content */}
                <div className="mt-4 flex items-center space-x-2">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                        'h-4 w-4 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div className="mt-4 max-w-none text-gray-500">{review.content}</div>
                <div className="flex space-x-4">
                  <div className="flex-none py-10">
                    <img
                      src={review.avatarSrc}
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-100"
                    />
                  </div>
                  <div className="py-10">
                    <h3 className="font-medium text-gray-900">{review.author}</h3>
                    <p>{review.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="bg-gray-100 rounded-sm p-2 disabled:bg-gray-400 disabled:text-white text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-darkblue-400"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage >= totalPages}
              className="bg-lightblue rounded-sm p-2 text-white cursor-pointer hover:bg-darkblue-300 focus:outline-none focus:ring-2 focus:ring-darkblue-400 ml-4"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-lightblue px-4 my-8 sm:flex py-16 sm:justify-around">
        <div className="text-sm sm:text-lg text-white">
          <h6>Find your next dream App</h6>
          <h1 className="text-xl sm:text-4xl font-bold mt-2">Start your Free trial now!</h1>
        </div>
        <div className="sm:flex sm:space-x-4 text-white mt-8 sm:mt-0">
          <button className="bg-blue-600 w-full px-6 h-12 rounded-sm text-sm">Contact us</button>
          <button className="bg-btngreen w-full px-6 h-12 mt-3 sm:mt-0 rounded-sm text-sm">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}
