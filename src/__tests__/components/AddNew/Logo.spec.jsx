import Logo from '../../../components/Logo'
import React from 'react';
import { render, screen } from '@testing-library/react'
import logo from '../../../assets/Logo-v5.svg'

jest.mock("react-router-dom", () => ({
    Link: ({ to, children }) => (
        <div className="link" data-to={to}>{children}</div>
    )
}))

describe("<Logo>", () => {
    it("should present on the top of the queue list page", () => {
        const { container } = render(<Logo />) ;
        screen.debug(container)
    })
    it("should present large on the top of the queue list page", () => {
        const { container } = render(<Logo logoSize="large" />) ;
        screen.debug(container)
        // expect(container).toMatchSnapshot()
    })
    it("should present medium on the top of the queue list page", () => {
        const { container } = render(<Logo logoSize="medium" />) ;
        screen.debug(container)
        // expect(container).toMatchSnapshot()
    })
    it("should present small on the top of the queue list page", () => {
        const { container } = render(<Logo logoSize="small" />) ;
        screen.debug(container)
        // expect(container).toMatchSnapshot()
    })
})