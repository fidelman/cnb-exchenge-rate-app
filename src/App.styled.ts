import styled from "styled-components";

export const Wrapper = styled.main`
	color: ${p => p.theme.colors.text};
	font-family: Arial, sans-serif;
	font-size: 15px;
	font-weight: 300;
`

export const Container = styled.div`
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;

	@media (min-width: 576px) {
		max-width: 540px;
	}

	@media (min-width: 768px) {
		max-width: 720px;
	}

`

export const Title = styled.h1`
	margin-bottom: .75rem;
	font-weight: 700;
	font-size: 35px;
	line-height: 45px;
`