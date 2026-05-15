const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
reveals.forEach(r => obs.observe(r));

document.querySelectorAll('.dash-card[role="button"]').forEach(card => {
    card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') card.click();
    });
});

const terms = [
    'SPI', 'SPEI', 'SPTI', 'PDSI', 'scPDSI', 'EDDI',
    'μ = Σx/n', 'σ² = Σ(x-μ)²/n', 'CV = σ/μ', 'MAD = Σ|x-μ|/n',
    'ρ(x,y) = Cov/σₓσᵧ', 'R² = 1 - SSᵣₑₛ/SSₜₒₜ', 'RMSE', 'MAE',
    'β = (XᵀX)⁻¹Xᵀy', 'ŷ = β₀ + β₁x', 'logit(p) = ln(p/1-p)',
    'LASSO', 'Ridge', 'ARIMA(p,d,q)', 'SARIMA(P,D,Q)ₛ', 'ACF', 'PACF',
    'H₀: μ₁ = μ₂', 't = (x̄₁ - x̄₂)/SE', 'p-value', 'χ² = Σ(O-E)²/E',
    'N(μ,σ²)', 'X ~ Bin(n,p)', 'X ~ Poisson(λ)', 'MCMC', 'Metropolis-Hastings',
    'SVM', 'Random Forest', 'XGBoost', 'PCA', 'k-means',
    'CO₂ ppm', 'CH₄ ppb', 'N₂O ppb', 'GWP', 'IPCC AR6', 'CMIP6',
    'PhD Research', 'Statistical Computing', 'Data Science', 'Climate Analytics',
    'Drought Index', 'GHG Emissions', 'Deep Learning', 'LSTM', 'Time Series'
];

const container = document.getElementById('particles');
if (container) {
    terms.forEach((term) => {
        const p = document.createElement('div');
        p.className = 'particle';
        p.textContent = term;
        p.style.left = (Math.random() * 95) + '%';
        p.style.animationDuration = (18 + Math.random() * 20) + 's';
        p.style.animationDelay = (Math.random() * 20) + 's';
        p.style.fontSize = (9 + Math.random() * 4) + 'px';
        container.appendChild(p);
    });
}
