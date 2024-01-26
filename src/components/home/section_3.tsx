const icons_list = [
  "flaticon-stats",
  "flaticon-family",
  "flaticon-handcuffs",
  "flaticon-stay-home",
  "flaticon-injury",
  "flaticon-auction",
];

export function Section3({ data }: { data: any }) {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <span className="subheading">Practice Area</span>
            <h2>What We Cover</h2>
          </div>
        </div>
        <div className="row">
          {data?.section_3_points?.map((data_: any, index: number) => {
            return (
              <div
                key={index}
                className="col-md-4 d-flex align-items-stretch ftco-animate"
              >
                <div className="services-2 text-center">
                  <div className="icon-wrap">
                    <div className="mini-icon d-flex align-items-center justify-content-center">
                      <span className={icons_list[index]} />
                    </div>
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className={icons_list[index]} />
                    </div>
                  </div>
                  <h2>{data_?.title}</h2>
                  <p>{data_?.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
