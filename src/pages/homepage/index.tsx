import React from "react";
import styled from "styled-components";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

import "./styles.css";

import People from "../../assets/peoples.svg";
import { CardContent, Container } from "@material-ui/core";

const HomePage = () => {
  const ContentStyled = styled.div``;

  return (
    <>
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

        <Grid container className="slider slide1">
          <Container maxWidth="xl">
            <div>
              <Typography variant="h3" gutterBottom>
                howToInvest
              </Typography>
              <Typography variant="body1" gutterBottom>
                by: Brandow Buenos
              </Typography>
              <Typography variant="h5" gutterBottom>
                <a href="https://github.com/brandowbuenos">
                  <FaGithub color="#333" size="30" />
                </a>
                <a href="https://www.linkedin.com/in/brandowbuenos/">
                  <FaLinkedin color="#333" size="30" />
                </a>
              </Typography>
            </div>
          </Container>
        </Grid>

        <Grid className="slider slide2">
          <Container maxWidth="xl">
            <Grid
              container
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid item lg={8}>
                <Typography variant="h4" gutterBottom>
                  A primeira coisa a avaliar é qual o seu
                  <strong> perfil de investidor</strong>
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Ele é basicamente, o conjunto de características pessoais e
                  psicológicas, que vai definir a melhor alocação.
                  <p>Algumas analises, se dão por:</p>
                </Typography>

                <Grid
                  container
                  justify="space-evenly"
                  direction="row"
                  style={{
                    marginTop: "5vh",
                  }}
                >
                  <Grid item lg={3}>
                    <Typography variant="h5" color="textSecondary" gutterBottom>
                      Apetite de risco
                    </Typography>
                    <Typography variant="h5" component="h2"></Typography>
                    <Typography>
                      Quanto de impacto de oscilações sua cabeça aguenta
                    </Typography>
                  </Grid>

                  <Grid item lg={3}>
                    <Typography variant="h5" color="textSecondary" gutterBottom>
                      Tomar risco
                    </Typography>
                    <Typography variant="h5" component="h2"></Typography>
                    <Typography>
                      Qual parte do patrimônio arriscar ou não e como fazer a
                      alocação
                    </Typography>
                  </Grid>

                  <Grid item lg={3}>
                    <Typography variant="h5" color="textSecondary" gutterBottom>
                      Horizonte
                    </Typography>
                    <Typography variant="h5" component="h2"></Typography>
                    <Typography>
                      Prazo que pretende deixar o dinheiro alocado no
                      investimento.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item lg={4}>
                <img src={People} alt="" style={{ width: "50vh" }} />
              </Grid>
            </Grid>
          </Container>
        </Grid>

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
    </>
  );
};

export default HomePage;
