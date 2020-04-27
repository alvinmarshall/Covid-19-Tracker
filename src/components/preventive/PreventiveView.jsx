import React from "react";

const PreventiveView = () => {
  return (
    <div>
      <div className="card">
        {/* Card header */}
        <div className="card-header">
          {/* Title */}
          <h5 className="h3 mb-0">
            Basic protective measures against the new coronavirus
          </h5>
        </div>
        {/* Card body */}
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <div
                className="timeline timeline-one-side"
                data-timeline-content="axis"
                data-timeline-axis-style="dashed"
              >
                <div className="timeline-block">
                  <span className="timeline-step badge-success">
                    <i className="ni ni-bell-55" />
                  </span>
                  <div className="timeline-content">
                    <div className="d-flex justify-content-between pt-1">
                      <div>
                        <span className="text-muted text-sm font-weight-bold">
                          Know how it spreads
                        </span>
                      </div>
                    </div>
                    <ul>
                      <li>
                        There is currently no vaccine to prevent coronavirus
                        disease 2019 (COVID-19).
                      </li>
                      <li>
                        The best way to prevent illness is to avoid being
                        exposed to this virus.
                      </li>
                      <li>
                        The virus is thought to spread mainly from
                        person-to-person
                        <ul>
                          <li>
                            Between people who are in close contact with one
                            another (within about 6 feet).
                          </li>
                          <li>
                            Through respiratory droplets produced when an
                            infected person coughs, sneezes or talks.
                          </li>
                          <li>
                            These droplets can land in the mouths or noses of
                            people who are nearby or possibly be inhaled into
                            the lungs.
                          </li>
                          <li>
                            Some recent studies have suggested that COVID-19 may
                            be spread by people who are not showing symptoms.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="timeline-block">
                  <span className="timeline-step badge-danger">
                    <i className="ni ni-atom" />
                  </span>
                  <div className="timeline-content">
                    <div className="d-flex justify-content-between pt-1">
                      <div>
                        <span className="text-muted text-sm font-weight-bold">
                          Cover your mouth and nose with a cloth face cover when
                          around others
                        </span>
                      </div>
                    </div>
                    <ul>
                      <li>
                        You could spread COVID-19 to others even if you do not
                        feel sick.
                      </li>
                      <li>
                        Everyone should wear a cloth face cover when they have
                        to go out in public, for example to the grocery store or
                        to pick up other necessities.
                        <ul>
                          <li>
                            Cloth face coverings should not be placed on young
                            children under age 2, anyone who has trouble
                            breathing, or is unconscious, incapacitated or
                            otherwise unable to remove the mask without
                            assistance.
                          </li>
                        </ul>
                      </li>
                      <li>
                        The cloth face cover is meant to protect other people in
                        case you are infected.
                      </li>
                      <li>
                        Do NOT use a facemask meant for a healthcare worker.
                      </li>
                      <li>
                        Continue to keep about 6 feet between yourself and
                        others. The cloth face cover is not a substitute for
                        social distancing.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="timeline timeline-one-side"
                data-timeline-content="axis"
                data-timeline-axis-style="dashed"
              >
                <div className="timeline-block">
                  <span className="timeline-step badge-success">
                    <i className="ni ni-bell-55" />
                  </span>
                  <div className="timeline-content">
                    <div className="d-flex justify-content-between pt-1">
                      <div>
                        <span className="text-muted text-sm font-weight-bold">
                          Wash your hands often
                        </span>
                      </div>
                    </div>
                    <ul>
                      <li>
                        Wash your hands often with soap and water for at least
                        20 seconds especially after you have been in a public
                        place, or after blowing your nose, coughing, or
                        sneezing.
                      </li>
                      <li>
                        If soap and water are not readily available, use a hand
                        sanitizer that contains at least 60% alcohol. Cover all
                        surfaces of your hands and rub them together until they
                        feel dry.
                      </li>
                      <li>
                        Avoid touching your eyes, nose, and mouth with unwashed
                        hands.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="timeline-block">
                  <span className="timeline-step badge-danger">
                    <i className="ni ni-atom" />
                  </span>
                  <div className="timeline-content">
                    <div className="d-flex justify-content-between pt-1">
                      <div>
                        <span className="text-muted text-sm font-weight-bold">
                          Avoid close contact
                        </span>
                      </div>
                    </div>
                    <ul>
                      <li>Avoid close contact with people who are sick</li>
                      <li>Stay home as much as possible.</li>
                      <li>
                        Put distance between yourself and other people.
                        <ul>
                          <li>
                            Remember that some people without symptoms may be
                            able to spread virus.
                          </li>
                          <li>
                            Keeping distance from others is especially important
                            for people who are at higher risk of getting very
                            sick.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="timeline timeline-one-side"
                data-timeline-content="axis"
                data-timeline-axis-style="dashed"
              >
                <div className="timeline-block">
                  <span className="timeline-step badge-success">
                    <i className="ni ni-bell-55" />
                  </span>
                  <div className="timeline-content">
                    <div className="d-flex justify-content-between pt-1">
                      <div>
                        <span className="text-muted text-sm font-weight-bold">
                          Clean and disinfect
                        </span>
                      </div>
                    </div>
                    <ul>
                      <li>
                        Clean AND disinfect frequently touched surfaces daily.
                        This includes tables, doorknobs, light switches,
                        countertops, handles, desks, phones, keyboards, toilets,
                        faucets, and sinks.
                      </li>
                      <li>
                        If surfaces are dirty, clean them. Use detergent or soap
                        and water prior to disinfection.
                      </li>
                      <li>
                        Then, use a household disinfectant. Most common
                        EPA-registered household disinfectantsexternal will
                        work.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="timeline-block">
                  <span className="timeline-step badge-danger">
                    <i className="ni ni-atom" />
                  </span>
                  <div className="timeline-content">
                    <div className="d-flex justify-content-between pt-1">
                      <div>
                        <span className="text-muted text-sm font-weight-bold">
                          Cover coughs and sneezes
                        </span>
                      </div>
                    </div>
                    <ul>
                      <li>
                        If you are in a private setting and do not have on your
                        cloth face covering, remember to always cover your mouth
                        and nose with a tissue when you cough or sneeze or use
                        the inside of your elbow.
                      </li>
                      <li>Throw used tissues in the trash.</li>
                      <li>
                        Immediately wash your hands with soap and water for at
                        least 20 seconds. If soap and water are not readily
                        available, clean your hands with a hand sanitizer that
                        contains at least 60% alcohol.
                      </li>
                    </ul>
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

export default PreventiveView;
