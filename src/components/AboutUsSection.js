import AboutUsData from  "../json/about-us.json";
export default  function AboutUsSection() {
    return (

    <section className="py-20 bg-white"> 
      <div className="container mx-auto px-6">
        {/* <!-- Section Title --> */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {AboutUsData.title}
            </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {AboutUsData.subtitle}
          </p>
        </div>

        {/* <!-- About Content Grid --> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* <!-- About Text --> */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {AboutUsData.contentTitle}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {AboutUsData.content}
            </p>

            {/* <!-- Stats --> */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">ลูกค้าที่ไว้วางใจ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">ปีประสบการณ์</div>
              </div>
            </div>
          </div>

          {/* <!-- About Image/Visual --> */}
          <div className="relative">
            <div
              className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white"
            >
              <div className="text-center">
                <i className="fas fa-users text-6xl mb-6 opacity-80"></i>
                <h4 className="text-2xl font-bold mb-4">ทีมงานมืออาชีพ</h4>
                <p className="text-blue-100 leading-relaxed">
                  เรามีทีมงานที่มีความเชี่ยวชาญและประสบการณ์ในด้านต่างๆ
                  พร้อมให้คำปรึกษาและบริการที่ดีที่สุด
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
    }