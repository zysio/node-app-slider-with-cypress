describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if user is able to navigate using buttons"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('exist');

    cy.get('.swiper-button-prev').click
    cy.wait(2000);
    cy.get('.swiper-button-prev').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('exist');
  });
});

describe('Swiper Gallery Slide Content Verification', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Checks if first slide contains "Rome" and "Italy"', function () {
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.get('.swiper-slide-active').should('contain', 'Italy');
  });

  it('Checks if second slide contains "London" and "United Kingdom"', function () {
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });

  it('Checks if third slide contains "Paris" and "France"', function () {
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'Paris');
    cy.get('.swiper-slide-active').should('contain', 'France');
  });
});

describe('Swiper Gallery Responsive Behavior', function () {
  const viewports = [
    { device: 'macbook-15', width: 1440, height: 900 },
    { device: 'ipad-2', width: 768, height: 1024 },
    { device: 'iphone-6', width: 375, height: 667 },
  ];

  viewports.forEach(viewport => {
    it(`displays correctly on ${viewport.device}`, function () {
      cy.viewport(viewport.width, viewport.height);
      cy.visit('http://localhost:3000');

      cy.get('.swiper').should('be.visible');
      cy.get('.swiper-button-next').should('be.visible').click();
      cy.wait(1000);
      cy.get('.swiper-button-prev').should('be.visible').click();
      cy.wait(1000);
    });
  });
});

