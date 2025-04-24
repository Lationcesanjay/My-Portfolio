import React from 'react';
 
const Frontendprojects = () => {
  const Frontendproject = [
    
    {
      category: "WeatherSphere",
      title: "Weather App",
      link: "https://weather-app-three-sooty-12.vercel.app/", 
      image: "https://miro.medium.com/v2/resize:fit:1400/0*GJqID-iVs0NDF35M",
      alt: "Weather App",
      github:"https://github.com/Lationcesanjay/weather-app",
    },
     
      {
        category: "MovieMania",
        title: "Movie App",
        link: "https://movie-app-iota-six-24.vercel.app/", 
        image: "https://marketplace.canva.com/EAFwIYYGYSo/1/0/1600w/canva-colorful-retro-illustrative-tasty-popcorn-logo-orfOhmyQqEI.jpg",
        alt: "Movie App",
        github:"https://github.com/Lationcesanjay/movie",
      },
      {
        category: "Login Sign-Up",
        title: "Login Sign-Up",
        link: "https://figma-file-tau.vercel.app/login", 
        image: "https://imgs.search.brave.com/KfktTZtDXQcn4D2dTb2eYXgIQleqkFrysl84BX99vOo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjU2/NzQ3ODAwL3ZlY3Rv/ci9sb2dpbi1wYWdl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1QUVhvX1NSb1lX/MExqZGZpWFAyblUt/UVlvRHhZNTFmb0Yx/TTRFZVgzLUprPQ",
        alt: "Login Sign-Up",
        github:"https://github.com/Lationcesanjay/figma-file",
      },
      {
        category: "Dummy Homepage",
        title: "Homepage",
        link: "https://class-demo.vercel.app/links", 
        image: "https://imgs.search.brave.com/04Rpj51KAffwNzRNy-XZqtBfknAFh9DLOKUm1go-MBQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE3/MzczODUyL3Bob3Rv/L2hvbWVwYWdlLWRv/bWFpbi1odG1sLXdl/Yi1kZXNpZ24tY29u/Y2VwdC53ZWJwP2E9/MSZiPTEmcz02MTJ4/NjEyJnc9MCZrPTIw/JmM9cGhOYlpXSW1r/S0RRN2pFMmpRTXlq/RWgtakxlWWFtRER1/aExHR2FmUVg5WT0",
        alt: "Homepage",
        github:"https://github.com/Lationcesanjay/class-demo",
      },
      {
        category: "Tic-Tac-Toe",
        title: "Tic-Tac-Toe Game",
        link: "https://inspiring-unicorn-c8073c.netlify.app/", 
        image: "https://cdn-icons-png.flaticon.com/512/806/806131.png",
        alt: "Tic-Tac-Toe",
        github:"https://github.com/Lationcesanjay/Tic-Tac-Toe", 
      },
      {
        category: "Airbnb",
        title: "Airbnb",
        link: "https://airbnb-app-gamma.vercel.app/", 
        image: "https://imgs.search.brave.com/mRk3D_k9Zz73fj6OXdgwZZvA69hAO_k_F__xu55Zed8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hMC5t/dXNjYWNoZS5jb20v/aW0vcGljdHVyZXMv/bWlzby9Ib3N0aW5n/LTExNDYzMzU4MDMw/NjA4NjY1MzYvb3Jp/Z2luYWwvODNlYjNm/NjUtY2EwZi00ZTli/LWJkNmQtZTlmYjlj/NzUzYzY3LmpwZWc",
         alt: "Airbnb",
        github:"https://github.com/Lationcesanjay?tab=repositories",
      },
      {
        category: "BMI App",
        title: "BMI App",
        link: "https://bmi-app-three.vercel.app/", 
        image: "https://imgs.search.brave.com/3oDoZQjk9rXpLbF5UyPjoNd5SsgjdAKPeVn1MygvQ3Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by93aGl0ZS1tZWFz/dXJpbmctdGFwZS1j/b3B5Ym9vay13aXRo/LWJtaS1ib2R5LW1h/c3MtaW5kZXgtd29y/ZHMtaGVhbHRoY2Fy/ZS1oZWFsdGh5LWxp/dmluZy1jb25jZXB0/Xzc1NjUyNy0xOTA5/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA",
        alt: "BMI App",
        github:"https://github.com/Lationcesanjay/BMI-app", 
      },
      {
        category: "Counter App",
        title: "Counter App",
        link: "https://counter-app47.netlify.app/", 
        image: 'https://imgs.search.brave.com/GGt8r1WHjg5NcyjQrOoAlrCI5ZS6jyO-Mly4oww-6VE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb3Vu/dGVyLmFwcGVyb2Fu/LmNvbS9pbWFnZXMv/Yy1jb3VudGVyLXRv/cC5wbmc',
        alt: "Counter App",
        github:"  https://github.com/Lationcesanjay/Counter-app", 
      },
  ];

  return (
    <div className="bg-slate-700 min-h-screen"> 
      <div className="container mx-auto py-8">
        <h2 className="text-4xl text-white text-center font-bold my-3 font-serif"> Projects</h2>
        <div className="border-b-2 border-blue-500 w-16 mx-auto mt-2"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 mx-4 font-serif">
          {Frontendproject.map((post, index) => (
            <div key={index} className="bg-gray-800 text-white rounded-xl animate-fadeInFromBottom">
              <img src={post.image} alt={post.alt} className="w-full h-64 object-cover rounded-xl"/>
              <div className="p-4">
                <h2 className="text-blue-400 text-sm font-bold">{post.category}</h2>
                <h3 className="text-2xl font-bold mt-2">
                  <a 
                    href={post.link} 
                    target="_blank"
                    className="hover:text-blue-300"
                  >
                    {post.title}
                  </a>
                  </h3>
                  <a href={post.github} target='_blank'> <h4>GitHub Link</h4></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frontendprojects;
