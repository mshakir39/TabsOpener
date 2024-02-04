import { describe, it, expect, vi } from 'vitest';
import PlusPage from '../routes/+page.svelte';
import { render, fireEvent, screen } from '@testing-library/svelte';

describe('Tabs component', () => {
  it('opens the specified number of tabs with the correct URL', async () => {
    // Mock window.open to track opened tabs
    const openSpy = vi.spyOn(window, 'open').mockReturnValue(null); // Mock window.open to return null

    // Render the component
    render(PlusPage);

    // Simulate entering URL and number of tabs
    const urlInput = screen.getByLabelText('Enter URL:');
    fireEvent.input(urlInput, { target: { value: 'http://www.example.com' } });

    const numTabsInput = screen.getByLabelText('How Many Tabs To Open:');
    fireEvent.input(numTabsInput, { target: { value: '3' } });

    // Simulate button click to trigger tab opening
    const openTabsButton = screen.getByText('Open Tabs');
    fireEvent.click(openTabsButton);

    // Assert that window.open is called 3 times with the correct URL and target
    expect(openSpy).toHaveBeenCalledTimes(3);
    expect(openSpy).toHaveBeenCalledWith('http://www.example.com', '_blank');

    // Restore the spy after the test
    vi.restoreAllMocks();
  });
});
