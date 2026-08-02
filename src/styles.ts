import { css } from "lit";

export const cardStyles = css`
  :host {
    display: block;
  }

  ha-card {
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
    overflow: hidden;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }

  .header-title {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
  }

  .header-title h1 {
    font-size: 1.25rem;
    font-weight: 500;
    margin: 0;
    color: var(--ha-card-header-color, var(--primary-text-color));
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .status-pill {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 2px 8px;
    border-radius: 999px;
    background: var(--secondary-background-color);
    color: var(--secondary-text-color);
    white-space: nowrap;
  }

  .status-pill.online {
    background: rgba(var(--rgb-state-active, 76, 175, 80), 0.15);
    color: var(--success-color, #4caf50);
  }

  .status-pill.offline {
    background: rgba(var(--rgb-state-error, 244, 67, 54), 0.15);
    color: var(--error-color, #f44336);
  }

  .status-pill.running {
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
    color: var(--primary-color);
  }

  .master-row {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .master-button {
    flex: 1 1 160px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 44px;
    padding: 0 20px;
    border: none;
    border-radius: 999px;
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
    font-family: inherit;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    transition:
      filter 150ms ease,
      box-shadow 150ms ease,
      transform 100ms ease;
  }

  .master-button ha-icon {
    --mdc-icon-size: 20px;
  }

  .master-button:hover {
    filter: brightness(1.08);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  }

  .master-button:active {
    transform: scale(0.98);
    filter: brightness(0.94);
  }

  .master-button:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  .master-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
    filter: none;
  }

  .secondary-button {
    flex: 1 1 160px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 44px;
    padding: 0 20px;
    border: 1px solid var(--primary-color);
    border-radius: 999px;
    background: transparent;
    color: var(--primary-color);
    font-family: inherit;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition:
      background 150ms ease,
      transform 100ms ease;
  }

  .secondary-button ha-icon {
    --mdc-icon-size: 20px;
  }

  .secondary-button:hover {
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
  }

  .secondary-button:active {
    transform: scale(0.98);
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.16);
  }

  .secondary-button:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  .secondary-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: transparent;
  }

  .locked-note {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: var(--ha-card-border-radius, 12px);
    background: rgba(var(--rgb-error-color, 244, 67, 54), 0.1);
    color: var(--error-color, #f44336);
    font-size: 0.82rem;
  }

  .locked-note ha-icon {
    --mdc-icon-size: 18px;
    flex-shrink: 0;
  }

  ha-icon-button.stop-all {
    --mdc-icon-button-size: 44px;
    color: var(--error-color, #f44336);
    border: 1px solid var(--error-color, #f44336);
    border-radius: 999px;
  }

  .zones-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    gap: 12px;
  }

  .zone-tile {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 14px;
    border-radius: var(--ha-card-border-radius, 12px);
    background: var(--secondary-background-color);
    border: 1px solid transparent;
    cursor: pointer;
    transition:
      background 180ms ease,
      border-color 180ms ease;
    min-height: 116px;
  }

  .zone-tile:hover {
    border-color: var(--divider-color);
  }

  .zone-tile.active {
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.12);
    border-color: var(--primary-color);
  }

  .zone-tile.disabled {
    opacity: 0.55;
  }

  .zone-tile.unavailable {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .zone-tile.locked {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .zone-tile.locked .zone-enable,
  .zone-tile.locked .stepper {
    pointer-events: none;
  }

  .zone-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 4px;
  }

  .zone-icon {
    position: relative;
    display: inline-flex;
    color: var(--state-icon-color, var(--secondary-text-color));
  }

  .zone-tile.active .zone-icon {
    color: var(--primary-color);
  }

  .zone-tile.active .zone-icon::before,
  .zone-tile.active .zone-icon::after {
    content: "";
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    border: 2px solid var(--primary-color);
    opacity: 0;
    animation: ripple 2s ease-out infinite;
    pointer-events: none;
  }

  .zone-tile.active .zone-icon::after {
    animation-delay: 1s;
  }

  @keyframes ripple {
    0% {
      transform: scale(0.6);
      opacity: 0.6;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  .zone-enable {
    --mdc-theme-secondary: var(--primary-color);
    transform: scale(0.9);
    margin: -6px -6px 0 0;
  }

  .zone-name {
    font-size: 1.05rem;
    font-weight: 500;
    line-height: 1.3;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .zone-state {
    font-size: 0.88rem;
    line-height: 1.3;
    color: var(--secondary-text-color);
  }

  .zone-progress {
    height: 6px;
    border-radius: 3px;
    background: var(--divider-color);
    overflow: hidden;
    margin-top: auto;
  }

  .zone-progress > div {
    height: 100%;
    background-color: var(--primary-color);
    background-image: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.35) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.35) 50%,
      rgba(255, 255, 255, 0.35) 75%,
      transparent 75%,
      transparent
    );
    background-size: 14px 14px;
    animation: flow 0.7s linear infinite;
    transition: width 1s linear;
  }

  @keyframes flow {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 14px 0;
    }
  }

  .zone-duration-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    font-size: 0.88rem;
    color: var(--secondary-text-color);
  }

  .stepper {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  .stepper ha-icon-button {
    --mdc-icon-button-size: 30px;
    --mdc-icon-size: 18px;
  }

  .zone-ai-row {
    display: flex;
    align-items: flex-start;
    gap: 4px;
    font-size: 0.85rem;
    color: var(--primary-color);
  }

  .zone-ai-row ha-icon {
    --mdc-icon-size: 16px;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .zone-ai-row span {
    flex: 1;
    min-width: 0;
    white-space: normal;
    overflow-wrap: break-word;
  }

  .zone-ai-row ha-icon-button {
    --mdc-icon-button-size: 28px;
    --mdc-icon-size: 17px;
    flex-shrink: 0;
  }

  ha-icon-button.recalculate {
    --mdc-icon-button-size: 32px;
    --mdc-icon-size: 18px;
    color: var(--secondary-text-color);
  }

  section.panel {
    border-top: 1px solid var(--divider-color);
    padding-top: 12px;
  }

  .panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
  }

  .panel-header h2 {
    font-size: 0.95rem;
    font-weight: 500;
    margin: 0;
    color: var(--primary-text-color);
  }

  .panel-header ha-icon {
    color: var(--secondary-text-color);
    transition: transform 180ms ease;
  }

  .panel-header.collapsed ha-icon {
    transform: rotate(-90deg);
  }

  .panel-body {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 10px;
  }

  .setting-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .setting-row .setting-label {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .setting-row .setting-label span.primary {
    font-size: 0.9rem;
    color: var(--primary-text-color);
  }

  .setting-row .setting-label span.secondary {
    font-size: 0.75rem;
    color: var(--secondary-text-color);
  }

  .slider-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .slider-row input[type="range"] {
    flex: 1;
    accent-color: var(--primary-color);
  }

  .slider-value {
    min-width: 42px;
    text-align: right;
    font-variant-numeric: tabular-nums;
    font-size: 0.85rem;
    color: var(--primary-text-color);
  }

  .estimate {
    font-size: 0.8rem;
    color: var(--secondary-text-color);
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    border-radius: 999px;
    background: var(--secondary-background-color);
    font-size: 0.78rem;
    color: var(--secondary-text-color);
  }

  .chip.on {
    color: var(--primary-color);
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.12);
  }

  .chip ha-icon {
    --mdc-icon-size: 16px;
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 24px 8px;
    color: var(--secondary-text-color);
    text-align: center;
  }

  @media (max-width: 480px) {
    ha-card {
      padding: 12px;
    }
    .zones-grid {
      /* Full-width tiles rather than cramming narrower ones in - the
         narrower packed layout made text unreadably small on phones. */
      grid-template-columns: 1fr;
      gap: 10px;
    }
    .zone-name {
      font-size: 1.1rem;
    }
    .zone-state {
      font-size: 0.92rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .zone-tile.active .zone-icon::before,
    .zone-tile.active .zone-icon::after,
    .zone-progress > div {
      animation: none;
    }
  }
`;
