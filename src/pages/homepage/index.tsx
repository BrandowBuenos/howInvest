import React from "react";
import styled from "styled-components";
import { Typography, Container } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";

import "./styles.css";

import People from "../../assets/peoples.svg";
import Pig from "../../assets/pig.svg";


function HomePage() {
  const Container = styled.div``;

  const PigIllustration = styled.img
    `
  width:30vw;
  `;

  return (
    <>
      <Container>
        <div className="css-slider-wrapper">
          <input
            type="radio"
            name="slider"
            className="slide-radio1"
            checked
            id="slider_1"
          />
          <input
            type="radio"
            name="slider"
            className="slide-radio2"
            id="slider_2"
          />
          <input
            type="radio"
            name="slider"
            className="slide-radio3"
            id="slider_3"
          />
          <input
            type="radio"
            name="slider"
            className="slide-radio4"
            id="slider_4"
          />
          <div className="slider-pagination">
            <label htmlFor="slider_1" className="page1"></label>
            <label htmlFor="slider_2" className="page2"></label>
            <label htmlFor="slider_3" className="page3"></label>
            <label htmlFor="slider_4" className="page4"></label>
          </div>
          <div className="next control">
            <label htmlFor="slider_1" className="numb1">
              <i className="fa fa-arrow-circle-right"></i>
            </label>
            <label htmlFor="slider_2" className="numb2">
              <i className="fa fa-arrow-circle-right"></i>
            </label>
            <label htmlFor="slider_3" className="numb3">
              <i className="fa fa-arrow-circle-right"></i>
            </label>
            <label htmlFor="slider_4" className="numb4">
              <i className="fa fa-arrow-circle-right"></i>
            </label>
          </div>
          <div className="previous control">
            <label htmlFor="slider_1" className="numb1">
              <i className="fa fa-arrow-circle-left"></i>
            </label>
            <label htmlFor="slider_2" className="numb2">
              <i className="fa fa-arrow-circle-left"></i>
            </label>
            <label htmlFor="slider_3" className="numb3">
              <i className="fa fa-arrow-circle-left"></i>
            </label>
            <label htmlFor="slider_4" className="numb4">
              <i className="fa fa-arrow-circle-left"></i>
            </label>
          </div>
          <div className="slider slide1">
            <Typography variant="h2" gutterBottom>
              howToInvest
                </Typography>
            <Typography variant="h6" gutterBottom>
              by: Brandow Buenos
             </Typography>
            <p>
              <a href="https://github.com/brandowbuenos">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/brandowbuenos/">
                <i className="fa fa-linkedin"></i>
              </a>
            </p>

            <PigIllustration src={Pig} alt="" />
          </div>
          <div className="slider slide2">
            <Grid container item xs={12} lg={12}>
              <div className="row">
                <Grid item lg={6}>
                  <h2>
                    A primeira coisa a avaliar é o
                  <strong> perfil de investidor</strong>.
                </h2>
                  <p>
                    Ele é basicamente, o conjunto de características pessoais e
                    psicológicas, que vai definir a melhor alocação.
                </p>

                  <div className="row">
                    <div className="col-sm-4">
                      <div className="card text-center">
                        <div className="card-body">
                          <h5 className="card-title">Apetite de risco</h5>
                          <p className="card-text">
                            Quanto de impacto de oscilações sua cabeça aguenta
                        </p>
                        </div>
                      </div>

                      <div className="col-sm-4">
                        <div className="card text-center">
                          <div className="card-body">
                            <h5 className="card-title">Tomar risco</h5>
                            <p className="card-text">
                              Qual parte do patrimônio arriscar ou não e como
                              fazer a alocação
                          </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-4">
                        <div className="card text-center">
                          <div className="card-body">
                            <h5 className="card-title">Horizonte</h5>
                            <p className="card-text">
                              Prazo que pretende deixar o dinheiro alocado no
                              investimento.
                          </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm">
                    <img src={People} alt="" style={{ width: "50vh" }} />
                  </div>
                </Grid>
              </div>
            </Grid>
          </div>

          <div className="slider slide3">
            <div>
              <h2>Full screen animation slider</h2>
              <a
                href="http://www.htmllion.com/pure-css-based-fullscreen-slider.html"
                className="button"
              >
                Back
            </a>
            </div>
          </div>
          <div className="slider slide4">
            <div>
              <h2>css3 slider</h2>
              <a
                href="http://www.htmllion.com/pure-css-based-fullscreen-slider.html"
                className="button"
              >
                Back
            </a>
            </div>
          </div>

        </div>
      </Container>

    </>
  );
}

export default HomePage;
