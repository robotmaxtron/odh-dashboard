import { Card } from '~/__tests__/cypress/cypress/pages/components/Card';

export class JupyterCard extends Card {
  constructor() {
    super('jupyter');
  }

  findTooltipInfo(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.find()
      .findByTestId('tooltip-img')
      .trigger('mouseenter')
      .then(() => {
        cy.findByText('Open Data Hub certified and supported');
      });
  }

  findDrawerPanel(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.findByTestId('explore-drawer-panel').then(() => {
      cy.get('h2').findByText('Jupyter');
    });
  }
}

export const jupyterCard = new JupyterCard();
